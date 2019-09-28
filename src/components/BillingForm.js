import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import LoaderButton from "./LoaderButton";
import "./BillingForm.css";

class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isProcessing: false,
      isCardComplete: false,
    };

    this.handleCancelPurchase = this.handleCancelPurchase.bind(this);
  }

  validateForm() {
    return (
      this.state.name !== "" &&
      this.state.isCardComplete
    );
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCardFieldChange = event => {
    this.setState({
      isCardComplete: event.complete
    });
  }

  handleSubmitClick = async event => {
    event.preventDefault();

    const { name } = this.state;

    this.setState({ isProcessing: true });

    const { token, error } = await this.props.stripe.createToken({ name });

    this.setState({ isProcessing: false });

    this.props.onSubmit({ token, error });
  }

  handleCancelPurchase(e) {
    e.preventDefault();
    console.log(e);
    this.props.cancelPurchase();
  }

  render() {
    const loading = this.state.isProcessing || this.props.loading;

    return (
      <div className="BillingFormContainer">
        <form className="BillingForm" onSubmit={this.handleSubmitClick}>
          <h1>Subscription Payment</h1>
          <hr />
          <FormGroup bsSize="large" controlId="name">
            <ControlLabel>Cardholder&apos;s name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              onChange={this.handleFieldChange}
              placeholder="Cardholder Name"
            />
          </FormGroup>
          <ControlLabel>Credit Card Info</ControlLabel>
          <CardElement
            className="card-field"
            onChange={this.handleCardFieldChange}
            style={{
              base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' }
            }}
          />
          <LoaderButton
            block
            bsSize="large"
            type="submit"
            text="Purchase"
            isLoading={loading}
            loadingText="Purchasing…"
            disabled={!this.validateForm()}
          />
        </form>
        <button onClick={this.handleCancelPurchase} className="BillingForm__cancel">x</button>
      </div>
      
    );
  }
}

export default injectStripe(BillingForm);
