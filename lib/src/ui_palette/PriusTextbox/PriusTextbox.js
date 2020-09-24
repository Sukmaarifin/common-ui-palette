import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, createStyles } from "@material-ui/core/styles";
var CustomTextbox = withStyles(function (theme) {
    return createStyles({
        root: {
            width: "100%",
            fontSize: "13px",
            lineHeight: 1.38,
            color: "#d0c9d6",
            backgroundColor: theme.colors.white,
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: theme.colors.grey3,
                },
                "&:hover fieldset": {
                    borderColor: theme.colors.grey3,
                },
                "&.Mui-focused fieldset": {
                    borderColor: theme.colors.grey3,
                    "&:hover fieldset": {
                        borderColor: theme.colors.grey3,
                    },
                },
            },
        },
    });
})(TextField);
export var PriusTextbox = function (_a) {
    var id = _a.id, placeholder = _a.placeholder, _b = _a.multiline, multiline = _b === void 0 ? false : _b, name = _a.name, rows = _a.rows, rowsMax = _a.rowsMax, value = _a.value, _c = _a.isError, isError = _c === void 0 ? false : _c, onChange = _a.onChange;
    return (React.createElement(CustomTextbox, { inputProps: { "data-identity": id && "" + id }, value: value, id: id, placeholder: placeholder, variant: "outlined", margin: "dense", multiline: multiline, name: name, rows: rows, rowsMax: rowsMax, onChange: onChange, error: isError }));
};
export default PriusTextbox;
