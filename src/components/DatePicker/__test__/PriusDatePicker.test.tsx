import React from 'react';
import { mount } from 'enzyme';

import DatePicker, { DatePickerProps } from '../DatePicker';

describe('DatePicker Testing', () => {
  const render = () => {
    const props: DatePickerProps = {
      selectedDays: { from: new Date(), to: new Date() },
      onDayClick: jest.fn(),
    };

    return mount(<DatePicker {...props} />);
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(wrapper.exists('DayPicker')).toEqual(true);
  });

  it('simulates click', () => {
    const wrapper = render();
    wrapper.find('Month').find('Day').first().simulate('click');
    expect(wrapper.props().onDayClick).toHaveBeenCalled();
  });
});
