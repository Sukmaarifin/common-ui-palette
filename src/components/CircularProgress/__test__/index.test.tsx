import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import CircularProgress, {
  CircularProgressProps,
} from '../CircularProgress';

describe('CircularProgress Testing', () => {
  const customProps: CircularProgressProps = {
    isWithText: true,
    size: 20,
  };

  const render = (props?: CircularProgressProps) => {
    return mount(
      <ThemeProvider theme={theme}>
        <CircularProgress {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully without props', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('render with props', () => {
    const wrapper = render(customProps);
    expect(wrapper.text()).toEqual('Memuat . . .');
  });
});
