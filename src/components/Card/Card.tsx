import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import PriusPaper from '../PriusPaper';
import PriusLabel from '../PriusLabel';

import { useStyles } from './CardCss';

export type CardProps = {
  className?: string;
  desc: string;
  icon: JSX.Element;
  label?: string;
  paperId?: string;
  title: string;
  onClick?: () => void;
};

export function Card({
  className,
  desc,
  icon,
  paperId,
  label,
  title,
  onClick,
}: CardProps) {
  const classes = useStyles();

  const iconWithClasses = React.cloneElement(icon, {
    className: classes.iconImg,
  });

  return (
    <PriusPaper
      className={clsx(
        classes.promotion,
        onClick ? classes.clickable : null,
        className ? className : null
      )}
      onClick={onClick}
      id={paperId}
    >
      <Grid className={classes.icon}>{iconWithClasses}</Grid>
      <Grid className={classes.info}>
        <Grid className={classes.title}>
          {title}
          {label && (
            <PriusLabel
              text={label}
              type="error"
              style={{
                marginLeft: '0.5rem',
                fontSize: '0.65rem',
                fontWeight: 300,
              }}
            />
          )}
        </Grid>
        <Typography className={classes.desc}>{desc}</Typography>
      </Grid>
    </PriusPaper>
  );
}

export default Card;
