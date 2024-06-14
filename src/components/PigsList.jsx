import React from "react";
import PigTile from "./PigTile";

function PigsList ({hogs}) {
  console.log("pigList:" , hogs)

  const listOfPigs = hogs.map((hog) => {
    return (
      <PigTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog["highest meal achieved"]}
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
