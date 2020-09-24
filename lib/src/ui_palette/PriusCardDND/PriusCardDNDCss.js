import { createStyles, makeStyles } from "@material-ui/core/styles";
export var useStyles = makeStyles(function (theme) {
    return createStyles({
        container: {
            padding: "1.25rem 2.5rem",
        },
        item: {
            marginRight: "auto",
            marginLeft: "2rem",
        },
        unpublished: {
            backgroundColor: theme.colors.grey,
        },
        dragable: {
            cursor: "move",
        },
        linkText: {
            color: theme.colors.primary,
        },
    });
});
