import React , {useState} from "react";
import PigCard from "./PigCard";
import Filter from "./Filter";
import Sort from "./Sort"

function PigsList ({hogs}) {
  const [filteredPigs, setFilteredPigs] = useState("All")
  const [sortPigsCatergory, setSortPigsCatergory] = useState("All")

  function filterGreasedPigs(hogs, filteredPigs ) {
    return hogs.filter((hog) => {
      if (filteredPigs === "Greased") {
        return hog.greased
      } else if (filteredPigs === "Not Greased") {
        return !hog.greased
      }
      return true
    })
  }

  function sortPigs(filteredGreasedPigs, sortPigsCatergory) {
    let sortedPigs = [...filteredGreasedPigs]
    if (sortPigsCatergory === "Name") {
      return sortedPigs.sort((a,b) => a.name.localeCompare(b.name))
    } else if (sortPigsCatergory === "Weight") {
      return sortedPigs.sort((a,b) => a.weight - b.weight)
    }
      return sortedPigs
  }

  function handleGreasedCategoryChange(event) {
    setFilteredPigs(event.target.value)
  }

  function handleSortingPigs(event) {
    setSortPigsCatergory(event.target.value)
  }

  const filteredGreasedPigs = filterGreasedPigs(hogs, filteredPigs)
  const sortedPigs = sortPigs(filteredGreasedPigs, sortPigsCatergory)

  const listOfPigs = sortedPigs.map((hog) => {
    return (
      <PigCard
        key={hog.name}
        hog={hog}
      />
    )
  })

  return (
    <div>
      <Sort onSortChange={handleSortingPigs}/>
      <br></br>
      <Filter onCategoryChange={handleGreasedCategoryChange}/>
      <br></br>
      <div className="ui grid container">
        {listOfPigs}
      </div>
    </div>
  )
}

export default PigsList
