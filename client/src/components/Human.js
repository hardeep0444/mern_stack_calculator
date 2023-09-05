import React, { useState } from "react";
import Female from "./Female";
import Male from "./Male";
// Understanding state lifting (passing data from child to parent)

const Human = () => {
  const [data, setdata] = useState(
    "type the data below and submit to pass the data from male(child) component to Human(parent) component"
  );

  function getData(childData) {
    setdata(childData);
    console.log(childData);
  }
  return (
    <div>
      <h1>
        <br></br>App.js {"->"}Human {"->"} Male, Female
        <br></br> Human : {data}
      </h1>
      <Male getData={getData} />
      <Female />
    </div>
  );
};

export default Human;
