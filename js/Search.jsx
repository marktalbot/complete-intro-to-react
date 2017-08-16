import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => {
    console.log(preload);
    return (
        <div className="search">
            {preload.shows.map((show, index) => <ShowCard key={index} show={show} />)}
        </div>
    );
};

export default Search;