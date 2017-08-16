import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Search = () => {
    console.log(preload);
    return (
        <div className="search">
            {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />)}
        </div>
    );
};

export default Search;