import { makeStyles, Theme } from '@material-ui/core/styles';

export const PriusBackdropCss = makeStyles((theme: Theme) => ({
  paper: {
    boxShadow: '0 0px 30px 0 rgba(0, 0, 0, 0.2)',
    padding: '1.25rem',
  },
  popper: {
    zIndex: theme.zIndex.tooltip,
    '&[x-placement*="bottom"]': {
      marginTop: '1.125rem',
      '& $arrow': {
        top: 0,
        left: 0,
        marginTop: '-0.7rem',
        width: '1.5rem',
        height: '0.75rem',
        '&::before': {
          borderWidth: '0 0.75rem 0.75rem 0.75rem',
          borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
        },
      },
    },
    '&[x-placement*="top"]': {
      marginBottom: '1.125rem',
      '& $arrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.7rem',
        width: '1.5rem',
        height: '0.75rem',
        '&::before': {
          borderWidth: '0.75rem 0.75rem 0 0.75rem',
          borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
        },
      },
    },
    '&[x-placement*="right"]': {
      marginLeft: '1.125rem',
      '& $arrow': {
        left: 0,
        marginLeft: '-0.7rem',
        height: '1.5rem',
        width: '0.75rem',
        '&::before': {
          borderWidth: '0.75rem 0.75rem 0.75rem 0',
          borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
        },
      },
    },
    '&[x-placement*="left"]': {
      marginRight: '1.125rem',
      '& $arrow': {
        right: 0,
        marginRight: '-0.7rem',
        height: '1.5rem',
        width: '0.75rem',
        '&::before': {
          borderWidth: '0.75rem 0 0.75rem 0.75rem',
          borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
        },
      },
    },
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '1rem',
    height: '1rem',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));
