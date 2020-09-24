import React from "react";
import clsx from "clsx";
import { Grid, Typography } from "@material-ui/core";
import PriusPaper from "../PriusPaper";
import PriusLabel from "../PriusLabel";
import { useStyles } from "./PriusCardCss";
export function PriusCard(_a) {
    var className = _a.className, desc = _a.desc, icon = _a.icon, paperId = _a.paperId, label = _a.label, title = _a.title, onClick = _a.onClick;
    var classes = useStyles();
    var iconWithClasses = React.cloneElement(icon, {
        className: classes.iconImg,
    });
    return (React.createElement(PriusPaper, { className: clsx(classes.promotion, onClick ? classes.clickable : null, className ? className : null), onClick: onClick, id: paperId },
        React.createElement(Grid, { className: classes.icon }, iconWithClasses),
        React.createElement(Grid, { className: classes.info },
            React.createElement(Grid, { className: classes.title },
                title,
                label && (React.createElement(PriusLabel, { text: label, type: "error", style: {
                        marginLeft: "0.5rem",
                        fontSize: "0.65rem",
                        fontWeight: 300,
                    } }))),
            React.createElement(Typography, { className: classes.desc }, desc))));
}
export default PriusCard;
