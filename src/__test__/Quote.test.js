import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Home snapshot', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});
