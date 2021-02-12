import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';

import Footer from '../Footer';

describe('Footer Testing', () => {
  const buttonClick = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Footer>
        <button onClick={buttonClick}>Click here</button>
      </Footer>
    </ThemeProvider>
  );

  it('render successfully', () => {
    expect(wrapper.find('Footer')).toBeTruthy();
  });

  it('simulates click children component', () => {
    wrapper.find(Footer).find('button').simulate('click');
    expect(
      wrapper.find(Footer).find('button').prop('onClick')
    ).toHaveBeenCalled();
  });
});
