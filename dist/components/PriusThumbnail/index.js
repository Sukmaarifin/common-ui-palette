"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var helpers_1 = require("../../helpers");
var FallbackImage_svg_1 = __importDefault(require("./FallbackImage.svg"));
var useStyles = styles_1.makeStyles(function () { return ({
    container: {
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        '&:hover': {
            opacity: '0.6',
        },
        '&:focus, &:active': {
            outline: 'none',
        },
    },
    image: {
        display: 'block',
        objectFit: 'cover',
    },
    small: {
        width: '2.5rem',
        height: '2.5rem',
    },
    medium: {
        width: '4rem',
        height: '4rem',
    },
    big: {
        width: '5rem',
        height: '5rem',
    },
}); });
var PriusThumbnail = function (_a) {
    var altText = _a.altText, className = _a.className, defaultSource = _a.defaultSource, imageSource = _a.imageSource, setSize = _a.setSize, size = _a.size, onError = _a.onError, onClick = _a.onClick, id = _a.id;
    var classes = useStyles();
    var _b = react_1.useState(), source = _b[0], setSource = _b[1];
    var handleDefaultSrc = function (event) {
        event.target.src = FallbackImage_svg_1.default;
        if (onError)
            onError();
    };
    react_1.useEffect(function () {
        if (!Boolean(imageSource) && !Boolean(defaultSource)) {
            setSource(FallbackImage_svg_1.default);
        }
        else if (Boolean(defaultSource)) {
            setSource(defaultSource);
        }
        else {
            setSource(imageSource);
        }
    }, [defaultSource, imageSource]);
    return onClick ? (react_1.default.createElement("button", { className: className ? className : classes.container, onClick: onClick, id: id && id + "-button-" + helpers_1.camelize(altText), "data-identity": id && id + "-button-" + helpers_1.camelize(altText) },
        react_1.default.createElement("img", { onError: handleDefaultSrc, alt: altText, style: {
                width: setSize,
                height: setSize,
            }, className: clsx_1.default(classes.image, classes[size]), src: source }))) : (react_1.default.createElement("img", { onError: handleDefaultSrc, alt: altText, className: className ? className : clsx_1.default(classes.image, classes[size]), src: source }));
};
exports.default = PriusThumbnail;
