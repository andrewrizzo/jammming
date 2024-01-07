import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SeachResults';
import Spotify from './uitl/Spotify';

function App() {
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState(
    {
      items: [],
    }
  );
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [playlist, setPlaylist] = useState(
    {
      tracks: [],
      uri: '',
    }
  );
  const removeTrackFromPlaylist = useCallback((index) => {
    setPlaylist({ ...playlist, tracks: playlist.tracks.filter((t, i) => index !== i) });
  }, [playlist, setPlaylist]);
  
  const addTrackToPlaylist = useCallback((index) => {
    setPlaylist(
      {
        ...playlist,
        tracks: [
          ...playlist.tracks,
          results[index],
        ],
      }
    );
  }, [results]);
  
  const search = useCallback(() => {
    Spotify.search(searchTerm).then(result => setResults(result));
  });

  const getPlaylists = useCallback(() => {
    Spotify.getPlaylists()
      .then(async result => await result.text()
      .then(text => setPlaylists(JSON.parse(text))));
  }, [setPlaylists]);

  const savePlaylist = useCallback(() => {
    if (playlist.uri === '')
      Spotify.savePlaylist(playlistName, playlist.tracks.map(track => track.uri).join(','))
      else Spotify.changePlaylist(playlist.id, { ...playlist, name: playlistName })
    setPlaylist({ tracks: [], uri: '' });
    setPlaylistName('');
  }, [playlistName, playlist, setPlaylist, setPlaylistName]);

  const createNewPlaylist = useCallback(() => {
  
    setPlaylist({ tracks: [], uri: '' });
  }, [setPlaylist]);

  const setActivePlaylist = useCallback((i) => {
    setPlaylist(playlists.items[i]);
    setPlaylistName(playlists.items[i].name);
  }, [setPlaylist, playlists]);

  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  useEffect(() => {
    if(!!playlist && !!playlist.tracks && !!playlist.tracks.href)
      Spotify.fetch(playlist.tracks.href).then(async result => {
        setPlaylist({
          ...playlist,
          tracks: result.items ? result.items.map(item => item.track) : []
        })
      })
  }, [playlist, setPlaylist])
  return (
    <div className="App">
      <h1>jammming</h1>
    <div>
      <SearchBar {...{ setSearchTerm, search }} />
    <div>
      <SearchResults {...{ results, addTrackToPlaylist }} />
      <Playlist
        {...{
          ...(!!playlist ? { playlist: playlist.tracks } : { playlist: [] }),
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
          playlists.items && playlists.items.map
            ? playlists.items.map((playlist, i) => 
              <div key={i}>
                <button onClick={() => setActivePlaylist(i)}>
                  Select
                </button>
                {playlist.name}
              </div>  
            )
            : <></>
        }
        <div>
        <button onClick={createNewPlaylist}>
          new playlist
        </button>

        </div>
      </div>
          </div>
      </div> 
    </div>
  );
}

export default App;
