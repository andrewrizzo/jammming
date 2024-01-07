import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';

import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SeachResults';
import Spotify from './uitl/Spotify';

function App() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [playlist, setPlaylist] = useState([]);
  
  const search = useCallback(() => {
    Spotify.search().then(result => {setResults(result); console.log({result})})
  });
  return (
    <div className="App">
      <h1>jammming</h1>
    <div>
      <SearchBar {...{ setSearchTerm, search }} />
    <div>
      <SearchResults {...{ results }} />
      <Playlist 
      {...{playlist}}
      
      />
          </div>
      </div> 
    </div>
  );
}

export default App;
