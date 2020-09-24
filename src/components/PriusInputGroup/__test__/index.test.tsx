import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import PriusInputGroup, { InputGroupProps } from '../index';
import { ArrowRightIcon } from '../../../icons';

describe('InputDropdwon Testing', () => {
  const render = () => {
    const props: InputGroupProps = {
      dropdownIcon: ArrowRightIcon,
      valueDropdown: 'JNE',
      valueInput: '90',
      placeholder: 'Masukkan no. Resi',
      dropdownItem: ['JNE', 'TIKI'],
      handleInput: jest.fn(),
      handleDropdown: jest.fn(),
    };

    return mount(
      <ThemeProvider theme={theme}>
        <PriusInputGroup {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
