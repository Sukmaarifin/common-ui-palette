import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../styles/material-ui-theme';

import Paper, { PaperProps } from '../Paper';

describe('Paper Testing', () => {
  const mountComponent = (props: PaperProps) =>
    mount(
      <ThemeProvider theme={theme}>
        <Paper {...props}>Hello from Paper!</Paper>
      </ThemeProvider>
    );

  it('add padding class', () => {
    const wrapper = mountComponent({ padding: 'largeSquare' });
    expect(
      wrapper
        .find('Paper')
        .childAt(0)
        .hasClass(/-(largeSquare)-(\d+)/)
    ).toBe(true);
  });

  it('add rounded class', () => {
    const wrapper = mountComponent({ rounded: true });
    expect(
      wrapper
        .find('Paper')
        .childAt(0)
        .hasClass(/-(rounded)-(\d+)/)
    ).toBe(true);
  });

  it('render with custom component', () => {
    const wrapper = mountComponent({ component: 'section' });
    expect(wrapper.find('Paper').childAt(0).is('section')).toBe(true);
  });

  it('render successfully', () => {
    const wrapper = mountComponent({});
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
