import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
    console.log(props);
    // "style" is a helper for inline css style attr
    return React.createElement('p', { style: { color: props.color } }, props.title);
}

const MyFirstComponent = function() {
    return React.createElement('div', { id: 'my-foobar' }, 
        React.createElement('h1', null, 'Helllllooooo World!'),
        React.createElement(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
        React.createElement(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
        React.createElement(MyTitle, { title: 'The Fall', color: 'LimeGreen' }),
        React.createElement(MyTitle, { title: 'The Office', color: 'peru' }),
    );
}

render(
    React.createElement(MyFirstComponent),
    document.getElementById('app')
);