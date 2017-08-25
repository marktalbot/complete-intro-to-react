import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: 'foobarbaz',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({ searchTerm: event.target.value }); // Use setState() method to modify state
    }

    render() {
        return (
            <div className="search">
                <header>
                    <h1>svideo</h1>
                    <input 
                        onChange={this.onChangeHandler} 
                        value={this.state.searchTerm} 
                        type="text" 
                        placeholder="search" 
                    />
                </header>
                <div>
                    {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />)}
                </div>
            </div>
        );    
    }
}

export default Search;