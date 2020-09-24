import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const priusMultipleSelectCss = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      boxShadow: 'none !important',
      border: 'none !important',
      minHeight: '2.5625rem !important',
    },
    container: {
      top: '0',
      position: 'relative',
      width: '100%',
    },
    selectContainerFocused: {
      border: 'none !important',
      zIndex: 999,
      '& > *$container': {
        background: 'white',
        boxShadow: theme.customShadows[1],
        position: 'absolute',
        borderRadius: '0.1875rem',
        overflow: 'auto',
      },
    },
    selectContainer: {
      position: 'relative',
      border: `1px solid ${theme.colors.grey3}`,
      minHeight: '2.5625rem !important',
      borderRadius: '0.1875rem',
    },
    valueContainer: {
      paddingLeft: '0.9375rem !important',
      paddingRight: '0.9375rem !important',
      marginRight: '-0.9375rem !important',
    },
    chip: {
      margin: '0.3125rem',
      '&:first-child': {
        marginLeft: '0',
      },
      '&:last-child': {
        marginRight: '0',
      },
    },
    iconIndicator: {
      fontSize: '0.5rem',
    },
    dropdownIndicator: {
      paddingRight: '0.9375rem !important',
      paddingLeft: '0.9375rem !important',
    },
    placeholder: {
      color: theme.colors.placeholder,
      '& > *': {
        color: 'inherit !important',
      },
    },
    menu: {
      background: 'transparent',
      boxShadow: 'none !important',
      borderRadius: '0 !important',
      marginTop: '0 !important',
      position: 'relative',
    },
    singleValue: {
      maxWidth: 'calc(100% - 2rem) !important',
    },
    indicatorsContainer: {
      '& > *:not(:last-child)': {
        marginRight: '-0.9375rem',
      },
    },
    error: {
      border: `1px solid ${theme.colors.failed}`,
    },
  })
);
