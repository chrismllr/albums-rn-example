import React from 'react';
import 'react-native';
import { Container } from '../Containers';
import renderer from 'react-test-renderer';

describe('Container', () => {
  it('renders to snapshot', () => {
    const tree = renderer.create(
      <Container />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
