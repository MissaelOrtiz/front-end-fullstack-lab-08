export const fetchGames = () => {
  return fetch(`${process.env.URL}`, { method: 'GET' })
    .then((res) => res.json());
};

export const fetchGameById = (id) => {
  return fetch(`${process.env.URL}/${id}`, { method: 'GET' })
    .then((res) => res.json());
};

export const postGame = (newGame) => {
  return fetch(`${process.env.URL}/`, { method: 'POST', body: newGame })
    .then((res) => res.json());
};

export const updateGame = (id, newGame) => {
  return fetch(`${process.env.URL}/${id}`, { method: 'PUT', body: newGame })
    .then((res) => res.json());
};

export const deleteGameById = (id) => {
  return fetch(`${process.env.URL}/${id}`, { method: 'GET' })
    .then((res) => res.json());
};
