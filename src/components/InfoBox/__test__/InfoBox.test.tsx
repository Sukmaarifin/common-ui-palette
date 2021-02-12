import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import InfoBox, { InfoBoxProps } from '../index';

describe('InfoBox Testing', () => {
  const render = () => {
    const props: InfoBoxProps = {
      title: 'Info',
      message: <p>This is an info message.</p>,
    };

    return mount(
      <ThemeProvider theme={theme}>
        <InfoBox {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
