import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from './board';
import WelcomeScreen from './welcomeScreen';
import Header from './header';

import './app.css';
import '../tachyons.css';

const values = 'abcdefghijklmnopqrstuv'.split('');
const size  = 5;

class App extends Component {

  renderGame(amountOfboards) {
    return Array.apply(null, { length: amountOfboards }).map((e, i) => (
      <Board id='i' size={size} values={values} />
    ));
  }

  renderWelcomeScreen() {
    return (
      <div>
        <Header />
        <main>
          <WelcomeScreen />
        </main>
      </div>
    );
  }

  render() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const amountOfboards = params.get('game');

    if (amountOfboards) {
      return this.renderGame(amountOfboards);
    }
    else {
      return this.renderWelcomeScreen();
    }
  }
}

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={App} />
  </Router>
);

export default AppRouter;
