/* eslint-disable max-len */
import React from 'react';
import { useEditEvents } from '../../hooks/useEvents';
import { useParams } from 'react-router-dom';
import { updateGame } from '../../services/gamesDatabase';

const GameEdit = () => {
  const { id } = useParams();
  const { loading, title, medium, genre, handleTitle, handleMedium, handleGenre } = useEditEvents(id);

  const handleSubmit = () => {
    const newGame = { title, medium, genre };
    updateGame(id, newGame);
    location.replace(`/${id}`);
  };

  if(loading) return <h1>Now Loading</h1>;
  return (
    <div aria-label="game">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" onChange={handleTitle} value={title}/>
        <input type="text" placeholder="medium" onChange={handleMedium} value={medium}/>
        <input type="text" placeholder="genre" onChange={handleGenre} value={genre}/>
        <button>Update!</button>
      </form>
      <button onClick={() => {
        location.replace(`/${id}`);
      }}>Cancel</button>
    </div>
  );
};

export default GameEdit;
