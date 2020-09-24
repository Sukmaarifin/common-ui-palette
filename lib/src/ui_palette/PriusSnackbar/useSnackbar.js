import { useContext } from "react";
import SnackbarContext from "./SnackbarContext";
var useSnackbar = function () {
    return useContext(SnackbarContext);
};
export default useSnackbar;
