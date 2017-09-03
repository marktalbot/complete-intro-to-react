import React from 'react';
// import renderer from 'react-test-renderer'; // Can't use "enzyme" and "renderer" together
import Search from '../Search';
import { shallow } from 'enzyme'; // Prevents the test from failing if child components change. Stubs out all child components

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});