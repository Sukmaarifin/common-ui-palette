import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PriusThumbnail, { PriusThumbnailProps } from '..';

describe('PriusThumbnail test', () => {
  const props: PriusThumbnailProps = {
    imageSource: '#some-cool-image.jpg',
    altText: 'Indonesia',
    size: 'small',
  };

  // snapshot
  it('renders correctly', () => {
    const wrapper = mount(<PriusThumbnail {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
