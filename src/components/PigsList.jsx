import React from "react";
import PigTile from "./PigTile";

function PigsList ({hogs}) {
  console.log("pigList:" , hogs)

  const listOfPigs = hogs.map((hog) => {
    return (
      <PigTile
        key={hog.name}
        hog={hog}
      />
    )
  })

  return (
    <div className="ui grid container">
      {listOfPigs}
    </div>
  )
}

export default PigsList
