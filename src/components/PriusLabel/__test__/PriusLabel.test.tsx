import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import PriusLabel, { PriusLabelProps } from '../index';

describe('PriusLabel Testing', () => {
  const render = () => {
    const props: PriusLabelProps = {
      theme: 'dark',
      type: 'primary',
      size: 'small',
      text: 'example',
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusLabel {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
