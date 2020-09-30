import React from 'react';
import { mount } from 'enzyme';

import DatePickerInput, {
  DatePickerInputProps,
} from '../DatePickerInput';

describe('DatePickerInput Testing', () => {
  const render = () => {
    const props: DatePickerInputProps = {
      selectedDate: new Date(),
      onDayClick: jest.fn(),
    };

    return mount(<DatePickerInput {...props} />);
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(wrapper.exists('DayPickerInput')).toEqual(true);
  });

  it('simulates click', () => {
    const wrapper = render();
    wrapper.find('input').simulate('click');
    wrapper.find('Day').at(10).find('div').simulate('click');
    expect(wrapper.props().onDayClick).toHaveBeenCalled();
  });
});
