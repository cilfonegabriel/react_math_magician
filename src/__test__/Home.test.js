import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Home snapshot', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});