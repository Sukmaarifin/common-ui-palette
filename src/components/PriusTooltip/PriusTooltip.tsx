import React from 'react';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import './priusTooltip.css';

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const useStylesCustom = makeStyles(() =>
  createStyles({
    arrow: {
      position: 'absolute',
      fontSize: 8,
      width: '3em',
      height: '3em',
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      },
    },
    popper: arrowGenerator('#333333'),
    tooltip: {
      position: 'relative',
      borderRadius: '3px',
      fontSize: 11,
      fontFamily: 'Metropolis',
      lineHeight: 1.45,
      backgroundColor: '#333333',
      maxWidth: '150px',
    },
    tooltipPlacementLeft: {
      margin: '0 8px',
      padding: '5px',
    },
    tooltipPlacementRight: {
      margin: '0 8px',
      padding: '5px',
    },
    tooltipPlacementTop: {
      margin: '8px 0',
      padding: '5px',
      textAlign: 'center',
    },
    tooltipPlacementBottom: {
      margin: '8px 0',
      padding: ' 5px',
      textAlign: 'center',
    },
  })
);

export type PriusTooltipProps = TooltipProps & {
  title: React.ReactNode;
  img?: string;
};

const PriusTooltip = ({ img, title, ...props }: PriusTooltipProps) => {
  const { arrow, ...classes } = useStylesCustom();
  const [arrowRef, setArrowRef] = React.useState<HTMLSpanElement | null>(null);

  return (
    <Tooltip
      classes={classes}
      disableHoverListener={!Boolean(title)}
      PopperProps={{
        disablePortal: false,
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef,
            },
          },
        },
      }}
      {...props}
      title={
        <React.Fragment>
          <div className={img ? 'prius-tooltip left' : 'prius-tooltip'}>
            {title}

            {img && <img src={img} className="preview" alt="preview" />}
          </div>
          <span className={arrow} ref={setArrowRef} />
        </React.Fragment>
      }
    />
  );
};

export default PriusTooltip;
