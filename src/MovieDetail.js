/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';


class MoviesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=cd83def55682ae0a7c7d397f922c66c6&language=en-US`);

      const movie = await res.json();

      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <h3>{this.state.movie.release_date}</h3>
        <p>{this.state.movie.overview}</p>
      </div>


    );
  }
}

export default MoviesDetail;

