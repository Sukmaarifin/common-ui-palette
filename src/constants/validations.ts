export const REGEX_EMAIL = new RegExp(
  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const REGEX_NUMBER = new RegExp(/^\d+$/);

export const REGEX_PHONE = new RegExp(/^[0-9]{10,11}$/);

export const REGEX_POSTAL_CODE = new RegExp(/^[0-9]{5}$/);

export const REGEX_DATE = new RegExp(
  /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/
);
