"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: __dirname + '/../.env' }); //instatiate environment variables
var currentLocation = window.location.href.split('?')[0];
var BASIC = 'basic';
var PRO = 'pro';
var ENTERPRISE = 'enterprise';
var DEV = 'development';
var STG = 'staging';
var PROD = 'production';
exports.PRIUS_NAME = process.env.REACT_APP_NAME || '';
exports.RADEN_URL = process.env.REACT_APP_RADEN || '';
exports.PRIUS_URL = currentLocation;
exports.MODE = process.env.REACT_APP_MODE || 'basic';
exports.ENV = process.env.REACT_APP_STAGE || 'production';
exports.SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || '';
exports.SECRET_KEY = process.env.REACT_APP_SECRET_KEY || '';
