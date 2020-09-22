import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
