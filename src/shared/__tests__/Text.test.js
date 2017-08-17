import React from 'react';
import 'react-native';
import { BaseText } from '../Text';
import renderer from 'react-test-renderer';

describe('BaseText', () => {
  it('renders to snapshot', () => {
    const tree = renderer.create(
      <BaseText />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
