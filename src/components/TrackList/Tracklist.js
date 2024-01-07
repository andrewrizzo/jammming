import React from "react";

import Track from "../Track/Track";

const TrackList = (props) => {
    return (
       <div>

           {
            props.tracks.map(track => 
                <Track {...track}/>
            )
           }
       
       </div> 
    );
};

export default TrackList;
