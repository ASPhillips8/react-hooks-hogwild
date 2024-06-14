import React from "react";

function PigTile ({name, image}) {

  return (
    <div className="pigTile">
      <h3>{name}</h3>
      <img src={image}></img>
    </div>
  )
}

export default PigTile
