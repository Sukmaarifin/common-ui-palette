import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import Textbox, { TextboxProps } from '../Textbox';

describe('Textbox test', () => {
  const render = () => {
    const props: TextboxProps = {
      id: 'prius-textbox',
      placeholder: 'Typing',
      multiline: false,
      name: 'Prius-Textbox',
      rows: 4,
      rowsMax: 4,
      value: 'a value',
      onChange: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <Textbox {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
