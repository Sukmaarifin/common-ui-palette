import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: "3px",
    border: `2px solid ${theme.colors.grey4}`,
    padding: "1.95rem",
    marginTop: "2px",
  },
  deleteContainer: {
    backgroundColor: theme.colors.white,
    width: "0.92rem",
    borderRadius: "50%",
    top: "1.3rem",
    left: "4rem",
    position: "relative",
    display: "flex",
  },
  deleteButton: {
    cursor: "pointer",
    marginLeft: "0.13rem",
    padding: "0.06rem",
  },
  thumbnail: {
    cursor: "pointer",
  },
  uploader: {
    visibility: "hidden",
    display: "none",
  },
  error: {
    border: `1px solid ${theme.colors.failed}`,
  },
}));
