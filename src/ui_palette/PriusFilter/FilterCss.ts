import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const FilterCss = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
    addFilterIcon: {
      fontSize: "0.875rem",
      marginLeft: "1rem",
    },
    backdropPaper: {
      overflow: "auto",
    },
    filterList: {
      display: "inline-block",
      paddingLeft: "0",
      verticalAlign: "top",
      margin: 0,
      "&:not(:last-child)": {
        marginRight: "2rem",
      },
    },
    filterListItem: {
      display: "block",
      marginBottom: "0.625rem",
      listStyleType: "none",
      "&:first-child": {
        padding: "0.3125rem 0.625rem",
      },
    },
    filterCheckbox: {
      "&> input[type='checkbox']": {
        opacity: 0,
        position: "absolute",

        "&:checked + label": {
          background: theme.colors.grey2,
        },
        "&:focus + label": {
          outline: `1px solid ${theme.colors.primary}`,
        },
      },
      "&> label": {
        padding: "0.3125rem 0.625rem",
        borderRadius: "0.3125rem",
        display: "inline-block",
        cursor: "pointer",
      },
    },
    spacing: {
      marginRight: theme.spacing(1),
    },
    filterActions: {
      display: "flow-root",
      marginTop: "2.5rem",
      textAlign: "right",
      "&> *:not(:last-child)": {
        marginRight: theme.spacing(1),
      },
    },
  })
);

// TODO: Experiment: override Paper max-width and max-height via paperClassName
