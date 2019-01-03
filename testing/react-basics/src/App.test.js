import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have the `th` "Items"', () => {
    // shallow render component
    const wrapper = shallow(<App />);
    // traverse the virtual DOM, picking out the first `th` element
    // assert that the element encloses a text value of "Items"
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });
});
