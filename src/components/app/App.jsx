import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamesList from '../games/GameList';
import GameDetail from '../games/GameDetail';
import GameCreate from '../games/GameCreate';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/create"> Create </Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/create">
          <GameCreate />
        </Route>
        <Route path="/:id">
          <GameDetail />
        </Route>
        <Route exact path="/">
          <GamesList />
        </Route>
      </Switch>
    </Router>
  );
}
