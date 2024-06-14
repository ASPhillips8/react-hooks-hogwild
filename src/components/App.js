import React from "react";
import Nav from "./Nav";
import PigsList from "./PigsList";

import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
      <PigsList hogs={hogs}/>
		</div>
	);
}

export default App;
