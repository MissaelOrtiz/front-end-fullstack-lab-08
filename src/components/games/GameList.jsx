import React from 'react';
import Game from './Game';
import { useListEvents } from '../../hooks/useEvents';

const GamesList = () => {
  const { loading, games } = useListEvents();
  if(loading) return <h1>Now Loading</h1>;
  return (
    <ul role="list" aria-label="games">
      {games.map(game => (
        <li key={game.id}>
          <Game 
            gameTitle={game.title}
            gameMedium={game.medium}
            gameGenre={game.genre}
          />
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
