import React from "react";
import TrackList from "../TrackList/Tracklist";
const SearchResults = (props) => {
    return (
        <div>
     <h2>Results</h2>
     <TrackList 
        tracks={props.results}
    
    
    />
        </div>
    );
};

export default SearchResults;