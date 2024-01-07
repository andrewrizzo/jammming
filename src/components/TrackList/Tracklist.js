import React from "react";

import Track from "../Track/Track";

const TrackList = (props) => {
    const { removeTrackFromPlaylist, showDeleteButton, showAddToPlaylistButton, addTrackToPlaylist } = props;
    return (
       <div>
                     
           {
            !!props.tracks && !!props.tracks.map
                ? props.tracks.map((track, i) => 
                    <Track 
                        { ...{
                            ...track,
                            removeTrackFromPlaylist,
                            showDeleteButton,
                            showAddToPlaylistButton,
                            addTrackToPlaylist,
                        } }
                        index={i}
                        key={i}
                    />
                    
                )
             : <></>
           }
       
       </div> 
    );
};

export default TrackList;
