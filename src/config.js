const dev = {
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0e4fqyjre6.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PmFtj8HBF",
    APP_CLIENT_ID: "361m3frq9av392qgs6jpchahn",
    IDENTITY_POOL_ID: "us-east-2:055d6573-cfb0-4353-b192-624456daf87a"
  },
};

const prod = {
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://76rnmt7w0g.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_sd4IZDFiP",
    APP_CLIENT_ID: "3l6ec2fbu7kj2vvi72ge7oj77r",
    IDENTITY_POOL_ID: "us-east-2:b02ee417-6e8d-4e9e-964d-58ce6f19c173"
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};