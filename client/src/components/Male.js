import React, { useState } from "react";
// Understanding state lifting (passing data from child to parent)
const Male = (props) => {
  const [name, setname] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    props.getData(name);
  };
  return (
    <div>
      <h1>Understanding state lifting (passing data from child to parent)</h1>
      <h3>Male</h3>
      <form onSubmit={handleChange}>
        <input
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Male;
