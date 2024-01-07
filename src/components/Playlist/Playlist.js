import React from "react";

import TrackList from "../TrackList/Tracklist";

const Playlist = (props) => {
    const { playlist, setPlaylist, removeTrackFromPlaylist } = props;
    return (
    <div>
    <input />
    <TrackList
        {...{ tracks: playlist, setPlaylist, removeTrackFromPlaylist, showDeleteButton: true }}
    />
    <button>
    SAVE TO SPOTIFY  
    </button>
    </div>
    );
}


export default Playlist;