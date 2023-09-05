import React from "react";
import { data } from "../App";
const Labrador = () => {
  return (
    <div>
      {/* Consumer accepts only function */}
      <data.Consumer>
        {(value) => {
          const { name, breed } = value; // Destructure the data from the context, this helps us from burden of writing value.name, value.breed everytime
          return (
            <div>
              <h1>Understanding the use of Context Api</h1>
              <h3>
                Labrador : {name} : {breed}
              </h3>
            </div>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Labrador;
