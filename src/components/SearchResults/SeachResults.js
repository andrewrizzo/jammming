import React from "react";
import TrackList from "../TrackList/Tracklist";
const SearchResults = (props) => {
    const { addTrackToPlaylist } = props;

    return (
        <div>
     <h2>Results</h2>
     <TrackList 
        {...{
            tracks: props.results,
            addTrackToPlaylist,
            showAddToPlaylistButton: true,
        }}
    />
        </div>
    );
};

export default SearchResults;