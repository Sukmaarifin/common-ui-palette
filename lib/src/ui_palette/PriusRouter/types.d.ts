export declare enum FeatureTypes {
    GET_ARTICLE = 0,
    LIST_ARTICLE = 1,
    GET_BANNER = 2,
    LIST_BANNER = 3,
    GET_BRAND = 4,
    GET_CATEGORY = 5,
    LIST_CATEGORY = 6,
    LIST_CHANNEL = 7,
    GET_COUPON = 8,
    GET_DISCOUNT = 9,
    GET_LOOKBOOK = 10,
    LIST_LOOKBOOK = 11,
    GET_NAVIGATION = 12,
    LIST_NAVIGATION = 13,
    GET_ORDER = 14,
    LIST_ORDER = 15,
    GET_PAYMENT = 16,
    LIST_PAYMENT = 17,
    GET_WIDGET = 18,
    LIST_WIDGET = 19,
    GET_MEMBER = 20,
    LIST_MEMBER = 21,
    GET_SETTING = 22,
    ADD_PRODUCT = 23,
    GET_PRODUCT = 24,
    LIST_PRODUCT = 25,
    LIST_SHIPPING = 26,
    GET_VARIANT = 27,
    LIST_VARIANT = 28,
    LIST_PROMOTION = 29,
    ADD_PROMOTION = 30,
    LIST_NOTIFICATION = 31,
    GET_NOTIFICATION = 32,
    LINK_TESTIMONIAL = 33,
    GET_TESTIMONIAL = 34
}
export declare type FeatureTypeStrings = keyof typeof FeatureTypes;
export declare const ROUTE_BY_PLAN: {
    [key in FeatureTypeStrings]: string;
};
export declare const DEFAULT_PLAN: Array<FeatureTypeStrings>;
export declare const DEFAULT_PLAN_STAGING: Array<FeatureTypeStrings>;
