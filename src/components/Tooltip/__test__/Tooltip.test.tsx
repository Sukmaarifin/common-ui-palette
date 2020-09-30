import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Tooltip, { TooltipProps } from '../Tooltip';

describe('Prius tooltip test', () => {
  const render = () => {
    const props: TooltipProps = {
      children: <button>aku</button>,
      placement: 'top',
      title: 'Lorem ipsum',
    };

    return mount(<Tooltip {...props} />);
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('render with img props', () => {
    const preview = 'default-user-img.jpg';
    const wrapper = mount(
      <Tooltip
        children={<button></button>}
        placement={'top'}
        title={'Lorem ipsum'}
        img={preview}
      />
    );
    expect(wrapper.prop('img')).toEqual(preview);
  });
});
