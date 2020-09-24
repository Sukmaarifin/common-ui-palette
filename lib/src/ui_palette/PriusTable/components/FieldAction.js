/**
 * @todo
 * [] unit testing
 */
import React from "react";
import get from "lodash/get";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PriusButtonText from "../../PriusButtonText";
var useStyles = makeStyles(function (theme) { return ({
    button: {
        borderColor: theme.colors.primary,
        border: "1px solid " + theme.colors.primary,
        padding: "4px 20px",
        borderRadius: "3px",
        "&:hover": {
            backgroundColor: theme.colors.primary,
            color: "white",
        },
    },
    grid: {
        justifySelf: "flex-end",
        alignSelf: "center",
        marginLeft: "auto",
    },
}); });
function FieldAction(_a) {
    var _b = _a.actionText, actionText = _b === void 0 ? "Detail" : _b, icon = _a.icon, record = _a.record, source = _a.source, handleOnClick = _a.handleOnClick, fieldId = _a.fieldId, fixedWidth = _a.fixedWidth, width = _a.width;
    var classes = useStyles();
    var ID = get(record, source);
    var onClick = function (e) {
        e.stopPropagation();
        handleOnClick(ID);
    };
    return (React.createElement(Grid, { item: true, className: classes.grid, style: {
            flexBasis: fixedWidth ? fixedWidth : width,
            flexShrink: fixedWidth ? 0 : 1,
            maxWidth: fixedWidth ? fixedWidth : width,
        } },
        React.createElement(PriusButtonText, { className: classes.button, color: "primary", onClick: onClick, inputId: fieldId },
            icon,
            actionText)));
}
export default FieldAction;
