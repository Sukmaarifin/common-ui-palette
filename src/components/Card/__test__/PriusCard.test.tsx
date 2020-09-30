import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/material-ui-theme';
import Card, { CardProps } from '../Card';
import { AddCircleIcon } from '../../../icons';

describe('Card Testing', () => {
  const mockProps: CardProps = {
    icon: <AddCircleIcon />,
    title: 'Tambah',
    desc: 'Klik disini untuk menambah',
  };

  it('render with required props', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card {...mockProps} />
      </ThemeProvider>
    );
    expect(
      wrapper.containsMatchingElement(
        <div className="makeStyles-title-7">Tambah</div>
      )
    ).toBeTruthy();
  });

  it('render with label Coming Soon', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card label="Coming Soon" {...mockProps} />
      </ThemeProvider>
    );
    expect(wrapper.find('PriusLabel').first().text()).toStrictEqual(
      'Coming Soon'
    );
  });

  it('render with onClick function', () => {
    const mockFunction = () => alert('card clicked');
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card onClick={mockFunction} {...mockProps} />
      </ThemeProvider>
    );
    // user simulate click on Card
    wrapper.simulate('click');

    expect(window.alert).toBeCalledWith('card clicked');
  });
});
