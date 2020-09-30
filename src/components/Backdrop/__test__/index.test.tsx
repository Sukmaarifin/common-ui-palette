import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PriusBackdrop, { BackdropProps } from '../Backdrop';

describe('PriusBackdrop test', () => {
  const props: BackdropProps = {
    popperId: 'dummy_prius_popper',
    placement: 'bottom-start',
    renderTrigger: (anchorRef: any, handleToggle: () => void) => (
      <button
        ref={anchorRef}
        onClick={handleToggle}
        aria-describedby={'dummy_prius_popper'}
      >
        Toggle Popper
      </button>
    ),
  };

  // snapshot
  it('renders correctly', () => {
    const wrapper = mount(
      <PriusBackdrop {...props}>
        Lorem ipsum, dolor sit amet consectetur
      </PriusBackdrop>
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders trigger button with its aria atribute', () => {
    const wrapper = shallow(
      <PriusBackdrop {...props}>Hello, I am popping up!</PriusBackdrop>
    );

    expect(
      wrapper.find('button[aria-describedby="dummy_prius_popper"]').first()
    ).toHaveLength(1);
  });
});
