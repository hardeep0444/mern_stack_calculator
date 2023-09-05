import React from "react";
import Dog from "./Dog";

const Animal = () => {
  return (
    <div>
      <h1>
        App.js {"->"} Animal {"->"} Dog {"->"} Labrador, German Sphered
      </h1>
      <Dog />
    </div>
  );
};

export default Animal;
