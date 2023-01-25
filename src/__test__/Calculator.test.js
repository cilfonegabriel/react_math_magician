import React from 'react';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('no crashes when rendering', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Calculator />);
});

test('Home snapshot', () => {
  const tree = renderer.create(<Calculator />);
  expect(tree).toMatchSnapshot();
});
