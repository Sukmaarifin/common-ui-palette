import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { camelize } from "../../helpers";
import FallbackImage from "./FallbackImage.svg";
var useStyles = makeStyles(function () { return ({
    container: {
        cursor: "pointer",
        border: "none",
        background: "transparent",
        "&:hover": {
            opacity: "0.6",
        },
        "&:focus, &:active": {
            outline: "none",
        },
    },
    image: {
        display: "block",
        objectFit: "cover",
    },
    small: {
        width: "2.5rem",
        height: "2.5rem",
    },
    medium: {
        width: "4rem",
        height: "4rem",
    },
    big: {
        width: "5rem",
        height: "5rem",
    },
}); });
var PriusThumbnail = function (_a) {
    var altText = _a.altText, className = _a.className, defaultSource = _a.defaultSource, imageSource = _a.imageSource, setSize = _a.setSize, size = _a.size, onError = _a.onError, onClick = _a.onClick, id = _a.id;
    var classes = useStyles();
    var _b = useState(), source = _b[0], setSource = _b[1];
    var handleDefaultSrc = function (event) {
        event.target.src = FallbackImage;
        if (onError)
            onError();
    };
    useEffect(function () {
        if (!Boolean(imageSource) && !Boolean(defaultSource)) {
            setSource(FallbackImage);
        }
        else if (Boolean(defaultSource)) {
            setSource(defaultSource);
        }
        else {
            setSource(imageSource);
        }
    }, [defaultSource, imageSource]);
    return onClick ? (React.createElement("button", { className: className ? className : classes.container, onClick: onClick, id: id && id + "-button-" + camelize(altText), "data-identity": id && id + "-button-" + camelize(altText) },
        React.createElement("img", { onError: handleDefaultSrc, alt: altText, style: {
                width: setSize,
                height: setSize,
            }, className: clsx(classes.image, classes[size]), src: source }))) : (React.createElement("img", { onError: handleDefaultSrc, alt: altText, className: className ? className : clsx(classes.image, classes[size]), src: source }));
};
export default PriusThumbnail;
