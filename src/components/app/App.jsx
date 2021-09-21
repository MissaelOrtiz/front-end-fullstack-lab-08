import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamesList from '../games/GameList';
import GameDetail from '../games/GameDetail';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
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
