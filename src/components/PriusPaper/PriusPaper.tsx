import React, { ElementType } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  large: {
    padding: '1.875rem 3.75rem',
  },
  largeSquare: {
    padding: '1.875rem',
  },
  medium: {
    padding: '1.25rem 2.5rem',
  },
  mediumSquare: {
    padding: '1.25rem',
  },
  noPadding: {
    padding: 0,
  },
  root: {
    background: theme.colors.white,
    boxShadow: theme.customShadows[2],
  },
  rounded: {
    borderRadius: '3px',
  },
}));

export interface PriusPaperProps {
  /* The content inside PriusPaper */
  children?: React.ReactNode;
  /* CSS Class name */
  className?: string;
  /**
   * The component used the for root node.
   * Either a string, DOM element, or a component
   */
  component?: ElementType<React.HTMLAttributes<HTMLElement>>;
  /**
   * id attribute that will be passed to the root component
   */
  id?: string;
  /**
   * The padding size
   */
  padding?: 'medium' | 'mediumSquare' | 'large' | 'largeSquare' | 'noPadding';
  /**
   * If `true`, render PriusPaper with rounded corner
   */
  rounded?: boolean;
  /* OnClick handler, will be passed to root component */
  onClick?: () => void;
}

/**
 * `PriusPaper` component provides a simple container with predefined padding, white background, and box-shadow.
 */
export function PriusPaper({
  className,
  children,
  component: Component = 'div',
  id,
  onClick,
  padding = 'medium',
  rounded = false,
  ...props
}: PriusPaperProps) {
  const classes = useStyles();

  return (
    <Component
      className={clsx(
        className,
        classes.root,
        rounded && classes.rounded,
        classes[padding],
        className
      )}
      data-identity={id}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

export default PriusPaper;
