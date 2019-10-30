const dev = {
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hsp42xehj4.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Rz8fNFYYZ",
    APP_CLIENT_ID: "7kadb9jlrsmjl1kt1uf4nslq61",
    IDENTITY_POOL_ID: "us-east-2:f5c414c9-d5b3-4d72-9e80-94680fd70ae3"
  },
  STRIPE_KEY: "pk_test_kqUUn0aeDLZh8ApHC7KR2Klh00jVqtwMFe",
};

const prod = {
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ohjnstaaua.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_hlXiA5eJn",
    APP_CLIENT_ID: "4nckfbn7pf5h66l50pc0o2jnpv",
    IDENTITY_POOL_ID: "us-east-2:4fdceb9b-c851-4236-a74c-201480564d4c"
  },
  STRIPE_KEY: "pk_live_bXlq3TfD1MWe8ADpZ8m4eoPC00WEayiBIz",
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
