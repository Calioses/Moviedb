/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;


Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,

  }).isRequired,
};
