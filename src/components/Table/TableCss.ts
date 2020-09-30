import { createStyles, Theme } from '@material-ui/core/styles';

export const TableCss = (theme: Theme) =>
  createStyles({
    header: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.625rem',
      fontWeight: 'bold',
      background: 'transparent',
    },
    headerColumn: {
      padding: '0 0.8rem',
    },
    headerButton: {
      '&:hover, &:active, &.active': {
        background: '#f4f4f4',
        borderRadius: '0.75rem',
        padding: '0.25rem 0.5rem',
      },
    },
    actionHeader: {
      '&> *:not(span)': {
        marginLeft: '2rem',
      },
    },
    toolbar: {
      flex: '2.625rem 0 0',
      display: 'flex',
      '&.left': {
        justifyContent: 'flex-start',
      },
      '&.right': {
        justifyContent: 'flex-end',
      },
    },
    selectedCount: {
      fontWeight: 'normal',
    },
    flexRowCard: {
      display: 'flex',
      flexDirection: 'row',
      wordWrap: 'break-word',
      verticalAlign: 'middle',
      alignItems: 'center',
      padding: '1rem 2.5rem',
    },
    flexRowDense: {
      display: 'flex',
      flexDirection: 'row',
      wordWrap: 'break-word',
      verticalAlign: 'middle',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '1.5rem 2.5rem',
    },
    divider: {
      height: '2px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.04)',
      backgroundColor: '#75d5f8',
      borderStyle: 'none',
      margin: 0,
    },
    emptyData: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.placeholder,
      borderBottom: `1px solid ${theme.colors.placeholder}`,
      padding: '1.375rem 2.5rem',
      '&> *:first-child': {
        marginRight: '0.5rem',
      },
    },
  });
