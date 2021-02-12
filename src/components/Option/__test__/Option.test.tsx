import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../styles/material-ui-theme';

import Option, { OptionProps } from '../Option';
import { DownloadIcon, TrashBinIcon } from '../../../icons';

describe('Option Testing', () => {
  const render = () => {
    const menuData = [
      {
        disabled: true,
        iconLeft: <DownloadIcon />,
        title: 'Download',
        tooltipText: 'Download feature is not ready yet!',
      },
      {
        disabled: false,
        iconLeft: <TrashBinIcon />,
        title: 'Delete',
        onClick: jest.fn(),
      },
    ];

    const props: OptionProps = {
      icon: 'vertical',
      items: menuData,
    };

    return shallow(
      <ThemeProvider theme={theme}>
        <Option {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
