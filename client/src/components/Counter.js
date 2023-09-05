import React, { useReducer } from "react";

const Counter = () => {
  const buttonStyle = {
    marginRight: "10px", // Add margin to create space between buttons
    // Other CSS properties here
  };

  const initialState = 0;
  const reducer = (currentState, action) => {
    switch (action) {
      case "Increment":
        return currentState + 1;
      case "Decrement":
        return currentState - 1;
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Counter</h1>
      count = {state}
      <br></br>
      <button
        className="btn btn-success"
        style={buttonStyle}
        onClick={() => {
          dispatch("Increment"); //dispatch calls the reducer function with the action increment
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        style={buttonStyle}
        onClick={() => {
          dispatch("Decrement"); //dispatch calls the reducer function with the action decrement
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
