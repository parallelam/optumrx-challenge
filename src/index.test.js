import React from 'react';
import renderer from 'react-test-renderer';
import { SignupForm } from '.';

test('SignupForm Returns Success or Error and prints to console API response', () => {
  const component = renderer.create(<SignupForm page='localhost:3000'>Test Submission</SignupForm>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
