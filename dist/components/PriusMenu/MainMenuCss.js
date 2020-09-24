"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var drawerWidth = '230px';
var drawerWidthSubMenu = '170px';
var MainMenuCss = core_1.makeStyles(function (theme) {
    var _a;
    return core_1.createStyles({
        root: {},
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerPaper: {
            backgroundColor: '#030303',
        },
        menuList: {
            lineHeight: '30px',
            fontSize: '14px',
            color: theme.colors.white,
        },
        drawerOpen: {
            width: drawerWidth,
        },
        drawerClose: (_a = {
                width: '60px'
            },
            _a[theme.breakpoints.up('sm')] = {
                width: '60px',
            },
            _a),
        link: {
            textDecoration: 'none',
            color: 'white',
        },
        //sub menu
        drawerSubMenu: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerPaperSubMenu: {
            width: drawerWidthSubMenu,
            marginLeft: '60px',
            backgroundColor: '#0f0f0f',
        },
        drawerListSubMenu: {
            '& span': {
                lineHeight: '30px',
                opacity: 0.4,
                fontSize: '14px',
                color: theme.colors.white,
            },
        },
        activeSubMenu: {
            '& span': {
                lineHeight: '30px',
                fontFamily: 'Metropolis',
                fontSize: '14px',
                color: '#ffffff',
                fontWeight: 'bold',
                opacity: 1,
            },
        },
        activeIcon: {
            color: '#ffffff',
            fontWeight: 'bold',
        },
        drawerOpenSubMenu: {
            width: drawerWidthSubMenu,
        },
        //icon
        imageIcon: {
            width: '19px',
            display: 'block',
        },
        imageIconInactive: {
            opacity: 0.5,
        },
        iconRoot: {
            width: '50px',
        },
        toolbar: {
            minHeight: '56px',
        },
        divider: {
            margin: '20px 0',
            width: '100%',
            height: '7px',
            borderBottom: '1px solid #9fa2a9',
            '& span': {
                marginLeft: '0px',
                padding: '10px',
                fontFamily: 'Metropolis',
                fontSize: '12px',
                color: '#9fa2a9',
                backgroundColor: '#030303',
            },
        },
        marginLeftDivider: {
            '& span': {
                marginLeft: '30px',
            },
        },
    });
});
exports.default = MainMenuCss;
