import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ gameTitle, gameId }) => (
  <button 
    onClick={() => {
      location.replace(`/${gameId}`);
    }}>
    <h2>{gameTitle}</h2>
  </button>
);
  
Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired
};
  
export default Game;
