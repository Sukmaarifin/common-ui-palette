"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
exports.PriusFileUploaderCss = styles_1.makeStyles(function (theme) { return ({
    box: {
        margin: '1rem 0',
        height: '216px',
        borderRadius: '3px',
        backgroundColor: theme.colors.white,
        color: theme.palette.text.primary,
        alignItems: 'baseline',
    },
    input: {
        position: 'relative',
        float: 'left',
        top: ' 50%',
        left: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        transform: 'translate(-50%, -50%)',
    },
    inputType: {
        width: '0.1px',
        height: '0.1px',
        opacity: 0,
        overflow: ' hidden',
        position: 'absolute',
        zIndex: -1,
    },
    img: {
        marginBottom: '20px',
        position: 'inherit',
    },
    link: {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: theme.palette.primary.main,
    },
}); });
