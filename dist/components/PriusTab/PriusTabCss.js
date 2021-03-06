"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        tabs: {
            '& .Mui-selected': {
                color: theme.colors.primary,
                fontWeight: 'bold !important',
            },
            '& .MuiTabs-indicator': {
                backgroundColor: theme.colors.primary,
            },
            '& .MuiTab-textColorInherit': {
                fontWeight: 'normal',
                textTransform: 'capitalize',
            },
            '& .MuiTab-textColorInherit.Mui-disabled': {
                backgroundColor: 'transparent !important',
                opacity: '0.3',
            },
        },
        tabsStandard: {
            background: theme.colors.white,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.04)',
            boxSizing: 'border-box',
        },
        tabsScrollable: {
            background: theme.colors.white,
            boxShadow: 'none',
            boxSizing: 'border-box',
            minHeight: 'unset !important',
            marginLeft: '-2.5rem',
            marginRight: '-2.5rem',
            paddingLeft: '1.875rem',
            paddingRight: '1.875rem',
            borderBottom: "1px solid " + theme.colors.grey4,
            '& .MuiTabScrollButton-root.MuiTabs-scrollButtons svg': {
                width: 15,
                height: 15,
                viewBox: '0 0 12 12',
                fill: 'none',
            },
            '& .MuiTabScrollButton-root.MuiTabs-scrollButtons svg path': {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                fill: '#444444',
            },
            '& .MuiTabScrollButton-root:first-child.MuiTabs-scrollButtons svg path': {
                d: 'path("M 11.2555 0.141245 L 11.8658 0.810959 C 11.9463 0.90067 11.9899 1.01753 11.9877 1.13806 C 11.9856 1.25859 11.938 1.37385 11.8543 1.46067 L 7.78005 5.59096 C 7.6952 5.67896 7.64731 5.79615 7.64625 5.91839 C 7.64519 6.04064 7.69103 6.15864 7.77434 6.2481 L 11.8715 10.5584 C 12.0423 10.7372 12.0423 11.0287 11.8721 11.2081 L 11.2503 11.8652 C 11.211 11.9078 11.1633 11.9418 11.1102 11.965 C 11.0571 11.9883 10.9998 12.0003 10.9419 12.0003 C 10.8839 12.0004 10.8266 11.9885 10.7735 11.9653 C 10.7204 11.9422 10.6726 11.9083 10.6332 11.8658 L 5.26977 6.22353 C 5.18649 6.13416 5.14067 6.01626 5.14173 5.89411 C 5.1428 5.77196 5.19067 5.65487 5.27548 5.56696 L 10.6395 0.128102 C 10.6798 0.0864906 10.7283 0.0536448 10.7819 0.0316191 C 10.8354 0.00959352 10.893 -0.0011381 10.9509 0.0000954761 C 11.0088 0.00132906 11.0659 0.0145013 11.1185 0.0387884 C 11.1711 0.0630754 11.2181 0.0979549 11.2566 0.141245 H 11.2555 Z M 6.1132 0.141245 L 6.72348 0.810959 C 6.804 0.90067 6.84758 1.01753 6.84546 1.13806 C 6.84334 1.25859 6.79568 1.37385 6.71205 1.46067 L 2.63777 5.59096 C 2.55291 5.67896 2.50503 5.79615 2.50396 5.91839 C 2.5029 6.04064 2.54874 6.15864 2.63205 6.2481 L 6.7292 10.5584 C 6.89948 10.7372 6.89948 11.0287 6.72977 11.2081 L 6.10805 11.8652 C 6.06872 11.9078 6.02102 11.9418 5.96794 11.965 C 5.91486 11.9883 5.85755 12.0003 5.79961 12.0003 C 5.74166 12.0004 5.68433 11.9885 5.63121 11.9653 C 5.57809 11.9422 5.53032 11.9083 5.49091 11.8658 L 0.128054 6.22353 C 0.0447804 6.13416 -0.001045 6.01626 0.0000180912 5.89411 C 0.00108118 5.77196 0.0489518 5.65487 0.133768 5.56696 L 5.49605 0.128102 C 5.53637 0.0864906 5.58483 0.0536448 5.63842 0.0316191 C 5.69201 0.00959352 5.74957 -0.0011381 5.80749 0.0000954761 C 5.86542 0.00132906 5.92246 0.0145013 5.97506 0.0387884 C 6.02767 0.0630754 6.07469 0.0979549 6.1132 0.141245 Z")',
            },
            '& .MuiTabScrollButton-root:last-child.MuiTabs-scrollButtons svg path': {
                d: 'path("M 0.744214 0.141245 L 0.133929 0.810959 C 0.0534082 0.90067 0.00982853 1.01753 0.0119486 1.13806 C 0.0140688 1.25859 0.0617315 1.37385 0.145357 1.46067 L 4.21964 5.59096 C 4.39564 5.76925 4.39793 6.06525 4.22536 6.2481 L 0.128214 10.5584 C -0.0426428 10.7372 -0.0426428 11.0287 0.127643 11.2081 L 0.749357 11.8652 C 0.788691 11.9078 0.836393 11.9418 0.889471 11.965 C 0.942549 11.9883 0.999858 12.0003 1.0578 12.0003 C 1.11575 12.0004 1.17308 11.9885 1.2262 11.9653 C 1.27932 11.9422 1.32709 11.9083 1.3665 11.8658 L 6.72993 6.22353 C 6.8132 6.13416 6.85903 6.01626 6.85796 5.89411 C 6.8569 5.77196 6.80903 5.65487 6.72421 5.56696 L 1.36021 0.128102 C 1.3199 0.0864906 1.27143 0.0536448 1.21785 0.0316191 C 1.16426 0.00959352 1.1067 -0.0011381 1.04878 0.0000954761 C 0.990852 0.00132906 0.933805 0.0145013 0.881204 0.0387884 C 0.828602 0.0630754 0.781578 0.0979549 0.743071 0.141245 H 0.744214 Z M 5.8865 0.141245 L 5.27621 0.810959 C 5.19569 0.90067 5.15211 1.01753 5.15423 1.13806 C 5.15635 1.25859 5.20402 1.37385 5.28764 1.46067 L 9.36193 5.59096 C 9.53793 5.76925 9.54021 6.06525 9.36764 6.2481 L 5.2705 10.5584 C 5.10021 10.7372 5.10021 11.0287 5.26993 11.2081 L 5.89164 11.8652 C 5.93098 11.9078 5.97868 11.9418 6.03176 11.965 C 6.08483 11.9883 6.14214 12.0003 6.20009 12.0003 C 6.25804 12.0004 6.31537 11.9885 6.36849 11.9653 C 6.42161 11.9422 6.46937 11.9083 6.50879 11.8658 L 11.8722 6.22353 C 11.9555 6.13416 12.0013 6.01626 12.0003 5.89411 C 11.9992 5.77196 11.9513 5.65487 11.8665 5.56696 L 6.50364 0.128102 C 6.46333 0.0864906 6.41486 0.0536448 6.36127 0.0316191 C 6.30769 0.00959352 6.25013 -0.0011381 6.19221 0.0000954761 C 6.13428 0.00132906 6.07723 0.0145013 6.02463 0.0387884 C 5.97203 0.0630754 5.92501 0.0979549 5.8865 0.141245 Z")',
            },
            '& .MuiTabs-flexContainer': {
                marginTop: '-0.3125rem',
                height: '1.875rem',
            },
            '& .MuiTab-root': {
                '@media (min-width: 600px)': {
                    minWidth: 'unset !important',
                },
            },
            '& .MuiTab-wrapper': {
                fontSize: '0.8125rem',
                flexDirection: 'row',
            },
            '& .MuiTab-wrapper svg': {
                paddingRight: '0.3125rem',
            },
            '& .MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit': {
                minHeight: 'unset !important',
            },
        },
    });
});
