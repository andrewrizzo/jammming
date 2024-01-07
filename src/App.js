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
  const removeTrackFromPlaylist = useCallback((index) => {
    setPlaylist(playlist.pop(index));
  }, [playlist]);
  
  const addTrackToPlaylist = useCallback((index) => {
    setPlaylist([
      ...playlist,
      results[index],
    ]);
  }, [results]);
  
  const search = useCallback(() => {
    Spotify.search(searchTerm).then(result => setResults(result));
  });
  return (
    <div className="App">
      <h1>jammming</h1>
    <div>
      <SearchBar {...{ setSearchTerm, search }} />
    <div>
      <SearchResults {...{ results, addTrackToPlaylist }} />
      <Playlist
        {...{playlist, setPlaylist, removeTrackFromPlaylist}}
      />
          </div>
      </div> 
    </div>
  );
}

export default App;
