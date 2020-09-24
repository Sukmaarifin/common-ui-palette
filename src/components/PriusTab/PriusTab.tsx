/**
 * @todo
 * [ ] adjust storybook
 */

import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { Tab, Tabs } from '@material-ui/core';

import { useStyles } from './PriusTabCss';

export type TabsType = 'standard' | 'scrollable';

export type TabMenu = {
  text: string;
  icon?: JSX.Element;
  disabled: boolean;
};

export type PriusTabProps = {
  activeTab: string | number;
  className?: string;
  style?: CSSProperties;
  tabs: Array<TabMenu>;
  variant?: TabsType;
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
  id?: string;
};

export const PriusTab = ({
  activeTab,
  className,
  onChange,
  tabs,
  id,
  variant = 'standard',
  ...props
}: PriusTabProps) => {
  const classes = useStyles();

  return (
    <Tabs
      id={id && `${id}-list-tab`}
      data-identity={id && `${id}-list-tab`}
      value={activeTab}
      className={clsx(
        classes.tabs,
        className,
        variant === 'scrollable' ? classes.tabsScrollable : classes.tabsStandard
      )}
      onChange={onChange}
      variant={variant}
      scrollButtons={variant === 'scrollable' ? 'on' : 'off'}
      {...props}
    >
      {tabs.map((item: TabMenu, index: number) => (
        <Tab
          id={id && `${id}${index}-select-tab`}
          data-identity={id && `${id}${index}-select-tab`}
          key={index}
          label={item.text}
          disabled={item.disabled}
          icon={item?.icon}
        />
      ))}
    </Tabs>
  );
};

export default PriusTab;
