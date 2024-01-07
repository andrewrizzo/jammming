import React from "react";

const Track = (props) => {
    return (
    <div>
      <h3>Name</h3>
      <div>
        <p>{props.artist}</p>
        <p>{props.name}</p>
        <p>{props.album}</p>
      </div>


    </div>
    );
};
export default Track;