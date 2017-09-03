import React from 'react';
// import renderer from 'react-test-renderer'; // Can't use "enzyme" and "renderer" together
import Search from '../Search';
import ShowCard from '../ShowCard';
import { shallow } from 'enzyme'; // Prevents the test from failing if child components change. Stubs out all child components
import preload from '../../data.json';

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search renders all shows if no search term is provided', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length); // Find the ShowCard child componenets (http://airbnb.io/enzyme/docs/api/ReactWrapper/find.html)
});

xtest('Search renders the correct number of shows on search term', () => {

});