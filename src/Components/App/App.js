import React from 'react';
import SearchGifs from '../SearchGifs/SearchGifs'
import GifList from '../GifList/GifList'

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchGifs />
      <GifList />
    </div>
  );
}

export default App;
