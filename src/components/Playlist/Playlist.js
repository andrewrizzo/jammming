import React from "react";

import TrackList from "../TrackList/Tracklist";

const Playlist = (props) => {
    
  
    return (
    <div>
    <input />
    <TrackList 
        tracks={[
            {
                album: "ALBUMNAME",
                artist: "ARTISTNAME",
                name: "TITLE",
            },
        ]}
    
    
    />
    <button>
    SAVE TO SPOTIFY  
    </button>
    </div>
    );
}


export default Playlist;