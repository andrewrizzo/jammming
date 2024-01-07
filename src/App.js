import React, {useState, useCallback, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SeachResults';
import Spotify from './uitl/Spotify';

function App() {
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
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

  const getPlaylists = useCallback(() => {
    Spotify.getPlaylists()
      .then(async result => await result.text()
      .then(text => setPlaylists(JSON.parse(text).items)));
  }, [setPlaylists]);

  const savePlaylist = useCallback(() => {
    Spotify.savePlaylist(playlistName, playlist.map(track => track.uri));
    setPlaylist([]);
    setPlaylistName('');
  }, [playlistName, playlist, setPlaylist, setPlaylistName]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists])

  return (
    <div className="App">
      <h1>jammming</h1>
    <div>
      <SearchBar {...{ setSearchTerm, search }} />
    <div>
      <SearchResults {...{ results, addTrackToPlaylist }} />
      <Playlist
        {...{
          playlist,
          setPlaylist,
          removeTrackFromPlaylist,
          playlistName,
          setPlaylistName,
          savePlaylist
        }}
      />

      <div>
        <h2>My Playlists</h2>
        {
          playlists && playlists.map
            ? playlists.map(playlist => 
              <div>
                {playlist.name}
              </div>  
            )
            : <></>
        }
      </div>
          </div>
      </div> 
    </div>
  );
}

export default App;
