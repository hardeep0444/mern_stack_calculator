import React from "react";
import { data, data1 } from "../App";
import { useContext } from "react";

const GermanShephered = () => {
  const { name, breed } = useContext(data);
  const color = useContext(data1);

  return (
    <div>
      <h1>Understanding the use of useContext Hook</h1>
      <h3>
        German Shephered {name} is {color} in color and it's a {breed} dog
      </h3>
    </div>
  );
};

export default GermanShephered;
