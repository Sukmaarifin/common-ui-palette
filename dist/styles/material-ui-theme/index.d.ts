declare module "@material-ui/core/styles/createMuiTheme" {
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
        customShadows: {
            [key: number]: string;
        };
    }
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
            grey2?: string;
            grey3?: string;
            grey4?: string;
            white?: string;
        };
        customShadows?: {
            [key: number]: string;
        };
    }
}
declare const theme: import("@material-ui/core/styles").Theme;
export default theme;
