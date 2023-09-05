import React, { createContext, useEffect } from "react";
import Sum from "./Sum";
import Animal from "./components/Animal";
import Human from "./components/Human";
import { useState } from "react";
import Counter from "./components/Counter";

const data = createContext();
const data1 = createContext();

const App = () => {
  const [state, setstate] = useState(1);

  const contextValue = {
    name: "Dog",
    breed: "good",
  };
  const contextValue1 = "Black";

  const onChange = () => {
    setstate(!state);
  };

  useEffect(() => {
    console.log("1");

    return () => {
      console.log("2");
    };
  }, [state]);

  return (
    <div>
      <button onClick={onChange} className="btn btn-primary">
        Change State
      </button>
      <br></br>
      <br></br>
      {/*  The value prop to the data.Provider should always be an object */}
      {/* Check the use of Context Api in Labrador */}
      {/* Check the use of useContext Hook in German Sphered */}
      <data.Provider value={contextValue}>
        <data1.Provider value={contextValue1}>
          {state ? (
            <>
              <Sum />
              <Counter />
            </>
          ) : (
            <>
              <Animal />
              <Human />
            </>
          )}
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default App;
export { data, data1 };
