import React, {useState} from "react";

function Form({onAddPig}) {
  const [formData, setFormData] = useState ('')

  console.log(onAddPig)
	return (
		<div>
      <form onSubmit={onAddPig}>
        <input type="text" id="name" name="name" placeholder="Name"></input>
        <input type="text" id="image" name="image" placeholder="Image URL"></input>
        <input type="text" id="specialty" name="specialty" placeholder="Specialty"></input>
        <input type="text" id="weight" name="weight" placeholder="Weight"></input>
        <input type="text" id="medal" name="medal" placeholder="Highest Medal Achieved"></input>
        <label>Greased?</label>
        <input type="checkbox" id="greased" name="Greased"/>
        <button type="submit">Add Pig</button>
      </form>
		</div>
	);
}

export default Form;


//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="image"
//         placeholder="Image URL"
//         value={formData.image}
//         onChange={handleChange}
//       />
//       <input
//         type="checkbox"
//         name="greased"
//         checked={formData.greased}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="specialty"
//         placeholder="Specialty"
//         value={formData.specialty}
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         name="weight"
//         placeholder="Weight"
//         value={formData.weight}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="medal"
//         placeholder="Highest Medal Achieved"
//         value={formData.medal}
//         onChange={handleChange}
//       />
//       <input
//         type="checkbox"
//         name="visible"
//         checked={formData.visible}
//         onChange={handleChange}
//       />
//       <button type="submit">Add Pig</button>
//     </form>
//   );
// };

// export default Form;
