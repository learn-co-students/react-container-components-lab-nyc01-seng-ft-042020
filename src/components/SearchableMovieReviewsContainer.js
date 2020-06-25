import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { replace } from 'sinon';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${URL}?query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(json => this.setState({ reviews: json.results }))
    }

    render() {
        return (
        <React.Fragment>
            <form className="searchableMovieReviewsContainer" onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" value={this.state.search} onChange={this.handleChange}></input>
                <input type="submit"></input>
            </form>
            <h2>Searched Reviews:</h2>
            <MovieReviews reviews={this.state.reviews}/>
        </React.Fragment>
        )
    }
}