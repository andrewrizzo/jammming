import React from "react";

const Track = (props) => {
  console.log({props})
    return (
    <div>
      <h3>Name</h3>
      <div>
        <p>{props.artist}</p>
        <p>{props.name}</p>
        <p>{props.album}</p>
      </div>

      {
        props.showDeleteButton
          ? <button onClick={() => props.removeTrackFromPlaylist(props.index)}>Remove</button>
          : <></>
      }

      {
        props.showAddToPlaylistButton
          ? <button onClick={() => props.addTrackToPlaylist(props.index)}>Add</button>
          : <></>
      }

    </div>
    );
};
export default Track;