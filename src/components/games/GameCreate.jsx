/* eslint-disable max-len */
import React from 'react';
import { useCreateEvents } from '../../hooks/useEvents';
import { postGame } from '../../services/gamesDatabase';

const GameCreate = () => {
  const { title, medium, genre, handleTitle, handleMedium, handleGenre } = useCreateEvents();
  
  const handleSubmit = () => {
    const newGame = { title, medium, genre };
    postGame(newGame);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" onChange={handleTitle} value={title}/>
        <input type="text" placeholder="medium" onChange={handleMedium} value={medium}/>
        <input type="text" placeholder="genre" onChange={handleGenre} value={genre}/>
        <button>CREATE!</button>
      </form>
    </>
  );
};

export default GameCreate;
