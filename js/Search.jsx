import React from 'react';
import preload from '../data.json';

const Search = () => {
    console.log(preload);
    return (
        <div className="search">
            <pre>{preload.shows.map((show, index) => {
                return (
                    <div key={index} className="show-card">
                        <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} Show Poster`}/>
                        <div>
                            <h3>{show.title}</h3>
                            <h4>({show.year})</h4>
                            <p>{show.description}</p>
                        </div>
                    </div>
                );
            })}</pre>
        </div>
    );
};

export default Search;