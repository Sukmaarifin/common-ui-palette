import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';
import Select from 'react-select';
import ReactCreatableSelect from 'react-select/creatable';

import theme from '../../../styles/material-ui-theme';

import MultipleSelect, {
  MultipleSelectProps,
} from '../MultipleSelect';
import CreatableSelect from '../CreatableSelect';

describe('MultipleSelect Testing', () => {
  const customProps: MultipleSelectProps = {
    placeholder: 'Pilih salah satu',
    options: [
      { label: 'San Jose Sharks', value: 'SJS', isDisabled: false },
      { label: 'Vancouver Canucks', value: 'VAN', isDisabled: false },
      { label: 'Vegas Golden Knights', value: 'VGK', isDisabled: false },
    ],
    onChange: jest.fn(),
  };

  const render = (props: MultipleSelectProps) => {
    return mount(
      <ThemeProvider theme={theme}>
        <MultipleSelect {...props} />
      </ThemeProvider>
    );
  };

  it('render successfully', () => {
    const wrapper = render(customProps);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('render `Select` from `react-select`', () => {
    const wrapper = render(customProps);

    expect(wrapper.find(Select)).toHaveLength(1);
  });

  it('render `CreatableSelect` that contain `ReactCreatableSelect` from `react-select/creatable`', () => {
    const wrapper = render({ ...customProps, isCreatable: true });

    const priusCreatableSelect = wrapper.find(CreatableSelect);
    expect(priusCreatableSelect.find(ReactCreatableSelect)).toHaveLength(1);
  });
});
