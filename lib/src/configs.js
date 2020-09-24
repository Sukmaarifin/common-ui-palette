require("dotenv").config({ path: __dirname + "/../.env" }); //instatiate environment variables
var currentLocation = window.location.href.split("?")[0];
var BASIC = "basic";
var PRO = "pro";
var ENTERPRISE = "enterprise";
var DEV = "development";
var STG = "staging";
var PROD = "production";
export var PRIUS_NAME = process.env.REACT_APP_NAME || "";
export var RADEN_URL = process.env.REACT_APP_RADEN || "";
export var PRIUS_URL = currentLocation;
export var MODE = process.env.REACT_APP_MODE || "basic";
export var ENV = process.env.REACT_APP_STAGE || "production";
export var SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || "";
export var SECRET_KEY = process.env.REACT_APP_SECRET_KEY || "";
