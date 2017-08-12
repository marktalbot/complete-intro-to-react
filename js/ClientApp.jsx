import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
    console.log(props);
    const style = { color: props.color };

    return (
        <div>
            <p style={style}>{props.title}</p>
        </div>    
    );
}

const MyFirstComponent = function() {
    return (
        <div id="my-foobar">
            <h1>Helllllooooo World!</h1>
            <MyTitle title="Game of Thrones" color="YellowGreen" />
            <MyTitle title="Stranger Things" color="GreenYellow" />
            <MyTitle title="The Fall" color="LimeGreen" />
            <MyTitle title="The Office (US)" color="peru" />
        </div>
    );
}

render(
    <MyFirstComponent />,
    document.getElementById('app')
);