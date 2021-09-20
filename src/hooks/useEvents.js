/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchGames, fetchGameById } from '../services/gamesDatabase';

export const useListEvents = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames()
      .then(games => setGames(games))
      .finally(() => setLoading(false));
  }, []);

  return { loading, games };
};

export const useDetailEvents = (id) => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState({});

  useEffect(() => {
    fetchGameById(id)
      .then(game => setGame(game))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, game };
};
