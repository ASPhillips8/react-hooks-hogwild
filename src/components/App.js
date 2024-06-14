import React, {useState} from "react";
import Nav from "./Nav";
import PigsList from "./PigsList";
import Form from "./Form";

import hogs from "../porkers_data";

function App() {
  console.log(hogs)
  const [hogslist, setHogList] = useState(hogs)

  function handleAddingNewPig(newPig) {
    return setHogList([...hogslist, newPig])
  }

	return (
		<div className="App">
			<Nav />
      <Form onAddPig={handleAddingNewPig}/>
      <PigsList hogs={hogslist}/>
		</div>
	);
}

export default App;
