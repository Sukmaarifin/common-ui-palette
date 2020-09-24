import { makeStyles } from "@material-ui/core/styles";
export var PriusIdicatorLabelCss = makeStyles(function () { return ({
    container: {
        padding: 0,
        borderRadius: "3px",
        backgroundColor: "#d1f7fd",
        color: "#080808",
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "inherit",
        marginLeft: "8px",
        display: "flex",
        flexDirection: "column",
    },
    failed: {
        backgroundColor: "#fde4d3",
    },
    description: {
        marginLeft: "26px",
        color: "#898989",
    },
    errrorDescription: {
        color: "red",
        padding: "0 0 0 15px",
    },
    content: {
        margin: "2px 0 2px 12px",
        display: "flex",
        alignItems: "center",
    },
    icon: {
        marginLeft: "26px",
        display: "inline-flex",
        verticalAlign: "middle",
        cursor: "pointer",
    },
    refreshIcon: {
        alignSelf: "center",
        marginBottom: "2px",
    },
    closeIcon: {
        backgroundColor: "transparent !important",
    },
}); });
