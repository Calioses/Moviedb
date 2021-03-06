/* eslint-disable linebreak-style */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
class MovieDetail extends Component {
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
    const { movie } = this.state;
    return (
      <div>
        <img
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
        />
        <img
          src={`${BACKDROP_PATH}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>


    );
  }
}

export default MovieDetail;

