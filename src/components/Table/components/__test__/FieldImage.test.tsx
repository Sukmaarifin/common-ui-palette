import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import FieldImage, { FieldImageProps } from '../FieldImage';
import { ThumbnailProps } from '../../../Thumbnail';

describe('FieldImage test', () => {
  const props: FieldImageProps = {
    record: {
      image: '#some-link-to-image',
    },
    source: 'image',
    altText: 'Super awesome product image',
    size: 'small',
  };

  const passedProps: ThumbnailProps = {
    imageSource: '#some-link-to-image',
    altText: 'Super awesome product image',
    size: 'small',
  };

  // snapshot
  it('renders correctly', () => {
    const wrapper = mount(<FieldImage {...props} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // snapshot
  it('renders PriusThumbnail with correct props', () => {
    const wrapper = mount(<FieldImage {...props} />);

    expect(wrapper.find('PriusThumbnail').props()).toEqual(passedProps);
  });
});
