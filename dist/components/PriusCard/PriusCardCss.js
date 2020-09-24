"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        promotion: {
            display: 'flex',
            flex: '0 0 28%',
            padding: '1rem',
            margin: '0.7rem',
            minWidth: '18rem',
            width: '100%',
            opacity: 0.6,
        },
        clickable: {
            cursor: 'pointer',
            opacity: 'unset',
        },
        desc: {
            fontSize: theme.typography.pxToRem(10),
            color: '#999',
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
        },
        iconImg: {
            height: '50%',
            width: '5rem',
        },
        info: {
            alignSelf: 'center',
        },
        title: {
            paddingBottom: '0.5rem',
            fontSize: 17,
            fontWeight: 'bold',
            color: theme.colors.text,
            display: 'flex',
        },
    });
});
