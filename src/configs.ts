require("dotenv").config({ path: __dirname + "/../.env" }); //instatiate environment variables
const currentLocation = window.location.href.split("?")[0];

const BASIC: string = "basic";
const PRO: string = "pro";
const ENTERPRISE: string = "enterprise";
const DEV: string = "development";
const STG: string = "staging";
const PROD: string = "production";

type FEATURE = typeof BASIC | typeof PRO | typeof ENTERPRISE;
type NODE_ENV = typeof DEV | typeof STG | typeof PROD;

export const GRAPHQL_PRIUS: string = process.env.REACT_APP_GRAPHQL || "";
export const PRIUS_NAME: string = process.env.REACT_APP_NAME || "";
export const RADEN_URL: string = process.env.REACT_APP_RADEN || "";
export const PRIUS_URL: string = currentLocation;
export const MODE: FEATURE = process.env.REACT_APP_MODE || "basic";
export const ENV: NODE_ENV = process.env.REACT_APP_STAGE || "production";
export const SENTRY_DSN: string = process.env.REACT_APP_SENTRY_DSN || "";
export const SECRET_KEY: string = process.env.REACT_APP_SECRET_KEY || "";
