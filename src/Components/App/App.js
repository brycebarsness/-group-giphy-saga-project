import SearchGifs from '../SearchGifs/SearchGifs'
import GifList from '../GifList/GifList'
import React from "react";
import FavoriteView from "../FavoriteView/FavoriteView";
import { HashRouter as Router, Route } from "react-router-dom";

// BrowserRouter as

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>

      <Router>
        <Route exact path="/">
          <SearchGifs />
          <GifList />
        </Route>
        <h1>Giphy Search!</h1>

        <div className="content-container">
          <Route path="/favorites" component={FavoriteView} />
          <FavoriteView />
        </div>
      </Router>
    </div>
  );
}

export default App;
