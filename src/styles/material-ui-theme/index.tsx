import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

import {
  CheckboxSelectedIcon,
  CheckboxIndeterminateIcon,
  CheckboxUnselectedIcon,
} from "../../icons";

declare module "@material-ui/core/styles/createMuiTheme" {
  // custom props
  interface Theme {
    colors: {
      primary: string;
      success: string;
      warning: string;
      failed: string;
      text: string;
      info: string;
      disabled: string;
      placeholder: string;
      grey: string;
      grey2: string;
      grey3: string;
      grey4: string;
      white: string;
    };
    customShadows: { [key: number]: string };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colors?: {
      primary?: string;
      success?: string;
      warning?: string;
      failed?: string;
      text?: string;
      info?: string;
      disabled?: string;
      placeholder?: string;
      grey?: string;
      grey2?: string; // custom
      grey3?: string; // custom
      grey4?: string; // custom
      white?: string;
    };
    customShadows?: { [key: number]: string };
  }
}

const COLORS = {
  primary: "#1C9AEA", // main primary
  primary2: "#1478C9", // dark primary
  secondary: "#DD3628", // main secondary
  secondary2: "#BE1D1E", // dark secondary
  success: "#00B969", // main success
  success2: "#008566", // dark success
  warning: "#FFCC00",
  failed: "#DD3626",
  text: "#444444",
  info: "#898989",
  disabled: "#BDBDBD",
  placeholder: "#E0E0E0",
  white: "#FFFFFF",
  grey: "#EEEEEE",
  grey2: "#F4F4F4",
  grey3: "#ECEBED", // light grey1
  grey4: "#E8E8E8", // light grey2
};

const ICON_SIZES = {
  small: "0.625rem", // ~10px
  medium: "1rem", // ~16px
  large: "1.3125rem", // ~21px
};

const theme = createMuiTheme({
  // overrides default theme
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Metropolis", sans-serif',
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 600,
      fontSize: "2.125rem",
      lineHeight: 1.21,
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 600,
      fontSize: "1.375rem",
      lineHeight: 1.27,
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 600,
      fontSize: "1.0625rem",
      lineHeight: 1.29,
      letterSpacing: "normal",
    },
    h4: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.33,
      letterSpacing: "normal",
    },
    h5: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.33,
      letterSpacing: "normal",
    },
    h6: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.33,
      letterSpacing: "normal",
    },
    subtitle1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.6875rem",
      lineHeight: 1.18,
      letterSpacing: "normal",
    },
    subtitle2: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.6875rem",
      lineHeight: 1.18,
      letterSpacing: "normal",
    },
    body1: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.8125rem",
      lineHeight: 1.38,
      letterSpacing: "normal",
      color: COLORS.text,
    },
    body2: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.625rem",
      lineHeight: 1.18,
      letterSpacing: "normal",
    },
    button: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "bold",
      fontSize: "0.8125rem",
      lineHeight: "1.3125rem",
      letterSpacing: "normal",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "0.6875rem",
      lineHeight: 1.18,
      letterSpacing: "0.03333em",
      textTransform: "uppercase",
    },
    overline: {
      fontFamily: '"Metropolis", sans-serif',
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: 1.38,
      letterSpacing: "normal",
    },
  },
  palette: {
    primary: {
      light: COLORS.primary,
      main: COLORS.primary,
      dark: COLORS.primary2,
    },
    secondary: {
      light: COLORS.secondary,
      main: COLORS.secondary,
      dark: COLORS.secondary2,
    },
    success: {
      light: COLORS.success,
      main: COLORS.success,
      dark: COLORS.success2,
    },
    error: {
      light: COLORS.failed,
      main: COLORS.failed,
      dark: COLORS.failed,
    },
    text: {
      disabled: COLORS.disabled,
      hint: COLORS.placeholder,
      primary: COLORS.text,
      secondary: COLORS.info,
    },
  },

  // overrides material-ui component default props
  props: {
    MuiCheckbox: {
      checkedIcon: <CheckboxSelectedIcon />,
      color: "default",
      indeterminateIcon: <CheckboxIndeterminateIcon />,
      icon: <CheckboxUnselectedIcon />,
    },
    MuiDialogTitle: {
      disableTypography: true,
    },
    MuiSvgIcon: {
      viewBox: "0 0 21 21",
    },
  },

  // overrides material-ui component styles
  overrides: {
    MuiButton: {
      root: {
        padding: "0.625rem 0.9375rem",
        borderRadius: "0.375rem",
        textTransform: "unset",
        minWidth: "2rem",
      },
      contained: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "&:hover": {
          boxShadow: "none",
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#0288D1",
        },
      },
      label: {
        lineHeight: ICON_SIZES.medium,
      },
      sizeSmall: {
        padding: "0.5rem 0.75rem",
        fontSize: "0.625rem",
        "&>*:first-child": {
          lineHeight: ICON_SIZES.small,
        },
      },
      sizeLarge: {
        padding: "0.6875rem 1.125rem",
        fontSize: "1.125rem",
        "&>*:first-child": {
          lineHeight: ICON_SIZES.large,
        },
      },
      iconSizeMedium: {
        "&>*:first-child": {
          fontSize: ICON_SIZES.medium,
        },
      },
      iconSizeSmall: {
        "&>*:first-child": {
          fontSize: ICON_SIZES.small,
        },
      },
      iconSizeLarge: {
        "&>*:first-child": {
          fontSize: ICON_SIZES.large,
        },
      },
      outlined: {
        padding: "0.5625rem 0.875rem !important",
      },
      outlinedSizeSmall: {
        padding: "0.4375rem 0.6875rem !important",
      },
      outlinedSizeLarge: {
        padding: "0.625rem 1.0625rem !important",
      },
      text: {
        padding: "auto",
      },
    },
    MuiButtonBase: {
      root: {
        "&$disabled": {
          background: COLORS.grey2,
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: COLORS.grey,
      },
    },
    MuiChip: {
      root: {
        height: "1.625rem",
        borderRadius: "0.75rem",
        backgroundColor: COLORS.grey2,
        color: COLORS.text,
      },
      label: {
        paddingLeft: "0.625rem",
        paddingRight: "0.625rem",
      },
      deleteIcon: {
        height: "0.625rem!important",
        width: "0.625rem!important",
        fontSize: "0.625rem!important",
        margin: "0 0.625rem 0 -0.25rem",
      },
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: "30rem",
      },
    },
    MuiDialogActions: {
      root: {
        padding: "1.25rem 2.5rem",
      },
    },
    MuiDialogContent: {
      root: {
        padding: "0.625rem 2.5rem",
        "&:first-child": {
          paddingTop: "1.875rem",
        },
        "&:last-child": {
          paddingBottom: "1.875rem",
        },
        "& > *:last-child": {
          marginBottom: "0.625rem !important",
        },
      },
    },
    MuiDialogContentText: {
      root: {
        color: `${COLORS.text} !important`,
        marginBottom: "1.25rem !important",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: "1.875rem 2.5rem 1.25rem 2.5rem",
        fontWeight: "bold",
        fontSize: "1.0625rem",
        lineHeight: 1.29,
        letterSpacing: "normal",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: COLORS.grey3,
      },
    },
    MuiIconButton: {
      root: {
        padding: "0.625rem",
      },
      label: {
        lineHeight: ICON_SIZES.medium,
      },
      sizeSmall: {
        padding: "0.5625rem",
        "& .MuiSvgIcon-root": {
          fontSize: ICON_SIZES.small,
        },
      },
    },
    MuiInputAdornment: {
      root: {
        fontSize: "0.8125rem",
        "& > .MuiTypography-root": { fontSize: "inherit" },
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: COLORS.grey2,
          color: "#3f3356",
        },
        "&$disabled": {
          pointerEvents: "auto",
          "&:hover": {
            background: "initial",
          },
        },
      },
      gutters: {
        padding: "0.25rem 1rem",
      },
    },
    MuiListItemText: {
      secondary: {
        marginTop: "0.25rem",
      },
    },
    MuiSelect: {
      icon: {
        color: "initial",
        fontSize: "0.5rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: ICON_SIZES.medium,
      },
      fontSizeSmall: { fontSize: `${ICON_SIZES.small} !important` },
      fontSizeLarge: { fontSize: `${ICON_SIZES.large} !important` },
    },
  },

  // custom props
  colors: COLORS,
  customShadows: {
    1: " 0 7px 30px 0 rgba(0, 0, 0, 0.2)",
    2: "0px 4px 8px rgba(0, 0, 0, 0.04)",
  },
});

export default theme;
