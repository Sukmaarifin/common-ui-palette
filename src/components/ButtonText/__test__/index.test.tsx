import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';

import ButtonText, { ButtonTextProps } from '../ButtonText';

describe('ButtonText Testing', () => {
  const render = () => {
    const props: ButtonTextProps = {
      startIcon: <span>Some Icon</span>,
      endIcon: <span>Some Icon</span>,
      children: 'Text',
      onClick: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <ButtonText {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
