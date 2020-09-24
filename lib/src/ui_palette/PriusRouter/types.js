var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// FEATURE PLAN SCHEMA-BASED TYPINGS
// Below typings may change to fit the GraphQL schema
export var FeatureTypes;
(function (FeatureTypes) {
    FeatureTypes[FeatureTypes["GET_ARTICLE"] = 0] = "GET_ARTICLE";
    FeatureTypes[FeatureTypes["LIST_ARTICLE"] = 1] = "LIST_ARTICLE";
    FeatureTypes[FeatureTypes["GET_BANNER"] = 2] = "GET_BANNER";
    FeatureTypes[FeatureTypes["LIST_BANNER"] = 3] = "LIST_BANNER";
    // GET_BANK_ACCOUNT,
    // LIST_BANK_ACCOUNT,
    FeatureTypes[FeatureTypes["GET_BRAND"] = 4] = "GET_BRAND";
    // LIST_BRAND,
    // GET_BUNDLE,
    // LIST_BUNDLE,
    FeatureTypes[FeatureTypes["GET_CATEGORY"] = 5] = "GET_CATEGORY";
    FeatureTypes[FeatureTypes["LIST_CATEGORY"] = 6] = "LIST_CATEGORY";
    // GET_CHANNEL,
    FeatureTypes[FeatureTypes["LIST_CHANNEL"] = 7] = "LIST_CHANNEL";
    // GET_COLLECTION,
    // LIST_COLLECTION,
    FeatureTypes[FeatureTypes["GET_COUPON"] = 8] = "GET_COUPON";
    // LIST_COUPON,
    FeatureTypes[FeatureTypes["GET_DISCOUNT"] = 9] = "GET_DISCOUNT";
    // LIST_DISCOUNT,
    // GET_INVENTORY,
    // LIST_INVENTORY,
    FeatureTypes[FeatureTypes["GET_LOOKBOOK"] = 10] = "GET_LOOKBOOK";
    FeatureTypes[FeatureTypes["LIST_LOOKBOOK"] = 11] = "LIST_LOOKBOOK";
    FeatureTypes[FeatureTypes["GET_NAVIGATION"] = 12] = "GET_NAVIGATION";
    FeatureTypes[FeatureTypes["LIST_NAVIGATION"] = 13] = "LIST_NAVIGATION";
    FeatureTypes[FeatureTypes["GET_ORDER"] = 14] = "GET_ORDER";
    FeatureTypes[FeatureTypes["LIST_ORDER"] = 15] = "LIST_ORDER";
    FeatureTypes[FeatureTypes["GET_PAYMENT"] = 16] = "GET_PAYMENT";
    FeatureTypes[FeatureTypes["LIST_PAYMENT"] = 17] = "LIST_PAYMENT";
    FeatureTypes[FeatureTypes["GET_WIDGET"] = 18] = "GET_WIDGET";
    FeatureTypes[FeatureTypes["LIST_WIDGET"] = 19] = "LIST_WIDGET";
    FeatureTypes[FeatureTypes["GET_MEMBER"] = 20] = "GET_MEMBER";
    FeatureTypes[FeatureTypes["LIST_MEMBER"] = 21] = "LIST_MEMBER";
    FeatureTypes[FeatureTypes["GET_SETTING"] = 22] = "GET_SETTING";
    FeatureTypes[FeatureTypes["ADD_PRODUCT"] = 23] = "ADD_PRODUCT";
    FeatureTypes[FeatureTypes["GET_PRODUCT"] = 24] = "GET_PRODUCT";
    FeatureTypes[FeatureTypes["LIST_PRODUCT"] = 25] = "LIST_PRODUCT";
    // GET_STATIC_PAGE,
    // LIST_STATIC_PAGE,
    // GET_SHIPPING,
    FeatureTypes[FeatureTypes["LIST_SHIPPING"] = 26] = "LIST_SHIPPING";
    // GET_TAG,
    // LIST_TAG,
    // GET_TENANT,
    // LIST_TENANT,
    FeatureTypes[FeatureTypes["GET_VARIANT"] = 27] = "GET_VARIANT";
    FeatureTypes[FeatureTypes["LIST_VARIANT"] = 28] = "LIST_VARIANT";
    // GET_WAREHOUSE,
    // LIST_WAREHOUSE,
    // GET_PROMOTION,
    FeatureTypes[FeatureTypes["LIST_PROMOTION"] = 29] = "LIST_PROMOTION";
    FeatureTypes[FeatureTypes["ADD_PROMOTION"] = 30] = "ADD_PROMOTION";
    FeatureTypes[FeatureTypes["LIST_NOTIFICATION"] = 31] = "LIST_NOTIFICATION";
    FeatureTypes[FeatureTypes["GET_NOTIFICATION"] = 32] = "GET_NOTIFICATION";
    FeatureTypes[FeatureTypes["LINK_TESTIMONIAL"] = 33] = "LINK_TESTIMONIAL";
    FeatureTypes[FeatureTypes["GET_TESTIMONIAL"] = 34] = "GET_TESTIMONIAL";
})(FeatureTypes || (FeatureTypes = {}));
export var ROUTE_BY_PLAN = {
    GET_ARTICLE: "/article/:id",
    LIST_ARTICLE: "/article-category",
    GET_BANNER: "/slideshow/:id",
    LIST_BANNER: "/slideshow",
    GET_BRAND: "/profile",
    GET_CATEGORY: "/category/:id",
    LIST_CATEGORY: "/category",
    LIST_CHANNEL: "/sales-channel",
    GET_COUPON: "/promotion/coupon/:id",
    GET_DISCOUNT: "/promotion/discount/:id",
    GET_LOOKBOOK: "/lookbook/:id",
    LIST_LOOKBOOK: "/lookbook",
    GET_NAVIGATION: "/navigation/:id",
    LIST_NAVIGATION: "/navigation",
    GET_ORDER: "/order/:id",
    LIST_ORDER: "/order",
    GET_PAYMENT: "/payment/:id",
    LIST_PAYMENT: "/payment",
    GET_WIDGET: "/widget/:id",
    LIST_WIDGET: "/widget",
    GET_MEMBER: "/member/:id",
    LIST_MEMBER: "/member",
    GET_SETTING: "/website",
    ADD_PRODUCT: "/product/add",
    GET_PRODUCT: "/product/:id",
    LIST_PRODUCT: "/product",
    LIST_SHIPPING: "/shipping",
    GET_VARIANT: "/variant/:id",
    LIST_VARIANT: "/variant",
    LIST_PROMOTION: "/promotion",
    ADD_PROMOTION: "/promotion/add",
    LIST_NOTIFICATION: "/notification",
    GET_NOTIFICATION: "/notification/:id",
    LINK_TESTIMONIAL: "/testimonial",
    GET_TESTIMONIAL: "/testimonial/:id",
};
// Dummy data for default plan
// Remove if no longer used
export var DEFAULT_PLAN = [
    "GET_BRAND",
    "GET_SETTING",
    "GET_BANNER",
    "ADD_PRODUCT",
    "ADD_PROMOTION",
    "LIST_PRODUCT",
    "LIST_ORDER",
    "LIST_PROMOTION",
    "LIST_MEMBER",
    "LIST_CATEGORY",
    "LIST_NAVIGATION",
    "LIST_WIDGET",
    "LIST_ARTICLE",
    "LIST_LOOKBOOK",
    "LIST_VARIANT",
    "LIST_SHIPPING",
    "LIST_PAYMENT",
    "LIST_BANNER",
];
export var DEFAULT_PLAN_STAGING = __spreadArrays(DEFAULT_PLAN, [
    "GET_NOTIFICATION",
    "GET_TESTIMONIAL",
    "LIST_NOTIFICATION",
    "LINK_TESTIMONIAL",
]);
