import React from "react";

const Track = (props) => {
    return (
    <div>
      <h3>Name</h3>
      <div>
        <p>{
          !!props.artists
            ? props.artists[0].name
            : props.artist
        }</p>
        <p>{props.name}</p>
        <p>{
          typeof props.album === "object"
            ? props.album.name
            : props.album
        }</p>
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