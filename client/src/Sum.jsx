import React from "react";
import { useState } from "react";

const Sum = () => {
  const [num, setnum] = useState({ num1: 0, num2: 0 });
  const [result, setresult] = useState("");

  const onNumberChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setnum({ ...num, [event.target.name]: "" });
    } else {
      setnum({ ...num, [event.target.name]: parseInt(inputValue) });
    }
  };

  const onSubmitResult = (response) => {
    setresult(response.c);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(typeof num.num1);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      a: num.num1,
      b: num.num2,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:5000/api/add", requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((result) => {
        console.log(result);
        fetch(`http://localhost:5000/api/${result}`)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            onSubmitResult(result);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-1">
          <label htmlFor="numberA">Number a</label>
          <input
            type="number"
            className="form-control"
            id="num1"
            placeholder="Enter a number"
            name="num1"
            value={num.num1}
            onChange={onNumberChange}
          />
        </div>
        <div className="form-group my-1">
          <label htmlFor="numberB">Number b</label>
          <input
            type="number"
            className="form-control"
            id="num2"
            name="num2"
            placeholder="Enter another number"
            value={num.num2}
            onChange={onNumberChange}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <div className="form-group my-1">
          <label htmlFor="result">Result</label>
          <input
            disabled={true}
            type="number"
            className="form-control"
            id="result"
            value={result}
          />
        </div>
      </form>
    </>
  );
};

export default Sum;
