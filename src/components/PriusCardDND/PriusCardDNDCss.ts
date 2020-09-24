import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '1.25rem 2.5rem',
    },
    item: {
      marginRight: 'auto',
      marginLeft: '2rem',
    },
    unpublished: {
      backgroundColor: theme.colors.grey,
    },
    dragable: {
      cursor: 'move',
    },
    linkText: {
      color: theme.colors.primary,
    },
  })
);
