import React from 'react';
import { useDetailEvents } from '../../hooks/useEvents';
import { useParams } from 'react-router-dom';
import { deleteGameById } from '../../services/gamesDatabase';

const GameDetail = () => {
  const { id } = useParams();
  const { loading, game } = useDetailEvents(id);
  const { title, medium, genre } = game;
  if(loading) return <h1>Now Loading</h1>;
  return (
    <div aria-label="game">
      <h2>{title}</h2>
      <p>Medium: {medium}</p>
      <p>Genre: {genre}</p>
      <section>
        <button onClick={() => {
          location.replace(`/edit/${id}`);
        }}>Edit</button>
        <button onClick={() => {
          deleteGameById(id);
          location.replace('/');
        }}>Delete</button>
      </section>
    </div>
  );
};

export default GameDetail;
