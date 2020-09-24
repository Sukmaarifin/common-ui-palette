import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PriusTooltip, { PriusTooltipProps } from '../PriusTooltip';

describe('Prius tooltip test', () => {
  const render = () => {
    const props: PriusTooltipProps = {
      children: <button>aku</button>,
      placement: 'top',
      title: 'Lorem ipsum',
    };

    return mount(<PriusTooltip {...props} />);
  };

  it('render successfully', () => {
    const wrapper = render();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('render with img props', () => {
    const preview = 'default-user-img.jpg';
    const wrapper = mount(
      <PriusTooltip
        children={<button></button>}
        placement={'top'}
        title={'Lorem ipsum'}
        img={preview}
      />
    );
    expect(wrapper.prop('img')).toEqual(preview);
  });
});
