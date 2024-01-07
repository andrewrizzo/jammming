import React from "react";

import TrackList from "../TrackList/Tracklist";

const Playlist = (props) => {
    const {
        playlist,
        setPlaylist,
        removeTrackFromPlaylist,
        playlistName,
        setPlaylistName,
        savePlaylist,
    } = props;
    return (
    <div>
    <input   placeholder=" new playlist Name" value={playlistName} onChange={e => setPlaylistName(e.target.value)} />
    <TrackList
        {...{ tracks: playlist, setPlaylist, removeTrackFromPlaylist, showDeleteButton: true }}
    />
    <button onClick={() => savePlaylist()}>
    SAVE TO SPOTIFY  
    </button>
    </div>
    );
}


export default Playlist;