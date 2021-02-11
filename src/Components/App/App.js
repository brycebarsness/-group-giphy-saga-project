import React from "react";
import FavoriteView from "../FavoriteView/FavoriteView";
import { HashRouter as Router, Route } from "react-router-dom";

// BrowserRouter as

function App(props) {
  return (
    <div>
      <Router>
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
