import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Thumbnail, { ThumbnailProps } from '../Thumbnail';

describe('Thumbnail test', () => {
  const props: ThumbnailProps = {
    imageSource: '#some-cool-image.jpg',
    altText: 'Indonesia',
    size: 'small',
  };

  // snapshot
  it('renders correctly', () => {
    const wrapper = mount(<Thumbnail {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
