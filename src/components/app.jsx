import React, { Component } from 'react';
import SearchBar from './searchBar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';
import giphy from 'giphy-api';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "10hO3rDNqqg2Xe"
        }
    }

    search = (query) => {
        giphy('YjdCgZSX40m9pFrYLBJyOgVUyWMhytkb').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            this.setState({
                gifs: result.data
            })
        })
    }

    render () {
        return (
            // return only returns one element so we wrap everything into one big div
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} />
                </div>
            </div>
        );
    }
}

export default App; 