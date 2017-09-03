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

test('Search renders the correct number of shows on search term', () => {
    const searchTerm = 'black';
    const component = shallow(<Search />);

    // 1. Finding <input> via CSS selector
    // 2. Simulation entering text into input and triggering the "onChange" event
    component.find('input').simulate('change', { target: { value: searchTerm }});
    
    const showCount = preload.shows.filter((show) => {
        return `${show.title} ${show.description}`
            .toUpperCase()
            .includes(searchTerm.toUpperCase());
    }).length;

    expect(component.find(ShowCard).length).toEqual(showCount);
});