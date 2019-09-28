import React, { Component } from "react";
import { API } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Settings.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      renderBillingForm: false,
      tier: "Free",
    };

    this.handleBasicPurchaseClick = this.handleBasicPurchaseClick.bind(this);
    this.cancelPurchase           = this.cancelPurchase.bind(this);
  }

  billUser(details) {
    return API.post("riser-sizer", "/billing", {
      body: details
    });
  }

  handleFormSubmit = async ({ token, error }) => {
    if (error) {
      alert(error);
      return;
    }

    this.setState({ isLoading: true });

    try {
      await this.billUser({
        source: token.id
      });

      alert("Your card has been charged successfully!");
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  renderBillingForm() {
    return (
      <div className="Settings">
        <StripeProvider apiKey={config.STRIPE_KEY}>
          <Elements>
            <BillingForm
              loading={this.state.isLoading}
              onSubmit={this.handleFormSubmit}
              clickedTier={this.state.clickedTier}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }

  handleBasicPurchaseClick() {
    this.setState({
      renderBillingForm: true,
    });
    console.log(this.state.renderBillingForm);
  }

  cancelPurchase() {
    console.log("hello");
    this.setState({
      renderBillingForm: false
    });
  }

  render() {
    return (
      <div className="Settings">
        <div className="Projects__Menu">
          <div className="Menu__wrapper">
            <div className="Menu__account">
              <div className="Menu__avi"></div>
              <p className="Menu__name"></p>
            </div>
            <a className="Menu__button" href="/">
              Dashboard
            </a>
            <a className="Menu__button">
              Help
            </a>
            <a className="Menu__button">
              Settings
            </a>
            <a className="Menu__button" onClick={this.props.handleLogout}>
              Logout
            </a>
          </div>
        </div>
        <div className="Settings__content">
          <h1 className="Settings__heading">Settings</h1>
          <div className="Subscription">
            <h2 className="Subscription__heading">Subscription</h2>
            <div className="Subscription__content">
              <p>You are currently using the FREE version of Riser Sizer. You are limited to 1 project. To use the app without restrictions, please consider upgrading to the BASIC version.</p>
              <button onClick={this.handleBasicPurchaseClick} className="Subscription__button">Subscribe</button>
            </div>
            {this.state.renderBillingForm &&
              <StripeProvider apiKey={config.STRIPE_KEY}>
                <Elements>
                  <BillingForm
                    cancelPurchase={this.cancelPurchase}
                    loading={this.state.isLoading}
                    onSubmit={this.handleFormSubmit}
                  />
                </Elements>
              </StripeProvider>
            }
          </div>
          <div className="Features">
            <h2>Features</h2>
            <h3>All following features are currently in development and will be available as part of a higher subscription tier, Premium.</h3>
            <ul>
              <li>
                <h4>Favorite Fixtures</h4>
                <p>This feature will allow the user to select up to 10 fixtures as favorites. Instead of having to scroll through the 27 fixtures, users  can have it so only their most used and favorite fixtures are shown on another list. This feature will be especially useful in conjunction with another feature, Keyboard Shortcuts.</p>
              </li>
              <li>
                <h4>Keyboard Shortcuts</h4>
                <p>Users can assign the 0-9 keys on their keyboard to their favorite fixtures. The shortcut number key will correspond to the number assigned to the fixture within your favorites.</p>
              </li>
              <li>
                <h4>Custom Fixtures</h4>
                <p>This feature allows users to create their own custom fixtures, separate from the default fixtures included in the app.</p>
              </li>
              <li>
                <h4>Fixture Groups</h4>
                <p>This feature allows you to create fixture groups, meaning you can create a group of fixtures that are typically used together. For example, typical apartment layouts include a bathroom group, sink, and dishwasher. Instead of having to select each fixture every time, add them to a group and only select it once to add all three.</p>
              </li>
              <li>
                <h4>Copy Risers</h4>
                <p>This feature allows you to duplicate a riser in your project. This is useful for high-riser residentail buildings where risers are mostly typical. Afterwards, edit the duplicated riser to make any adjustments.</p>
              </li> 
              <li>
                <h4>Dark Mode</h4>
                <p>Dark mode because who doesn't like dark mode.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

// <table className="Subscription__table">
//               <colgroup>
//                 <col className="Subscription__labels"/>
//                 <col className="Subscription__free"/>
//                 <col className="Subscription__basic"/>
//                 <col className="Subscription__plus"/>
//               </colgroup>
//               <tr>
//                 <td>&nbsp;</td>
//                 <td className="Table__heading Table__heading--free">Free</td>
//                 <td className="Table__heading Table__heading--basic">Basic</td>
//                 <td className="Table__heading Table__heading--plus">Plus</td>
//               </tr>
//               <tr>
//                 <td>Projects</td>
//                 <td>1</td>
//                 <td>Unlimited</td>
//                 <td>Unlimited</td>
//               </tr>
//               <tr>
//                 <td>Favorite Fixtures</td>
//                 <td>No</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Copy Risers</td>
//                 <td>No</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Custom Fixtures/Groups</td>
//                 <td>No</td>
//                 <td>No</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Keyboard Shortcuts</td>
//                 <td>No</td>
//                 <td>No</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>Dark Mode</td>
//                 <td>No</td>
//                 <td>No</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <td>&nbsp;</td>
//                 <td>Active</td>
//                 <td><button onClick={this.handleBasicPurchaseClick} className="purchase-button purchase-button--basic">Purchase - $15</button></td>
//                 <td><button className="purchase-button purchase-button--plus">Purchase - $25</button></td>
//               </tr>
//             </table>