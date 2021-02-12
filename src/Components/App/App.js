import SearchGifs from '../SearchGifs/SearchGifs'
import GifList from '../GifList/GifList'
import React from "react";
import FavoriteView from "../FavoriteView/FavoriteView";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css'

// BrowserRouter as

function App(props) {
  return (
      <Router>
        <header>
          <h1>Giphy Search!</h1>
          <ul>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
          </ul>
        </header>
          <Switch>
            <Route path='/search' component={SearchGifs}></Route>
            <Route path='/searchlist' component={GifList}></Route>
            <Route path="/favorites" component={FavoriteView}></Route>
          </Switch>
      </Router>
  );
}

export default App;
