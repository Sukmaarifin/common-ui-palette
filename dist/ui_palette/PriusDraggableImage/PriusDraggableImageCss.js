"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        container: {
            position: "absolute",
            cursor: "pointer",
            "&:hover": {
                "& #hoverContent": {
                    display: "block",
                },
                "& #imageHover": {
                    filter: "grayscale(1) brightness(0.6)",
                },
            },
            "& #hoverContent": {
                display: "none",
            },
        },
        onHover: {
            top: "30%",
            position: "absolute",
            width: "min-content",
            fontWeight: "bold",
            paddingLeft: "1.3rem",
            color: theme.colors.white,
            textAlign: "center",
        },
    });
});
