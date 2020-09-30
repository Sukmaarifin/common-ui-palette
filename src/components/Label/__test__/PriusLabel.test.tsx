import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import Label, { LabelProps } from '../Label';

describe('Label Testing', () => {
  const render = () => {
    const props: LabelProps = {
      theme: 'dark',
      type: 'primary',
      size: 'small',
      text: 'example',
    };

    return mount(
      <ThemeProvider theme={theme}>
        <Label {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
