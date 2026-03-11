import React, { useState, useMemo } from "react";

const UseMemos = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const factorial = (n) => {
    let result = 1;
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    console.log("factorial function executed");
    return result;
  };

  const factorialValue = useMemo(() => factorial(number), [number]);

  const incrementHandler = () => {
    // setCounter((prev) => prev + 1);
    setCounter(counter +1)
  };
  const Factoialvalue =(e)=>{
    setNumber(e.target.value)
  }

  return (
    <div>
      <h3>Factorial: {factorialValue}</h3>

      <input
        type="number"
        onChange={Factoialvalue}
      />

      <br /><br />

      <button
        type="button"
        style={{
          border: "1px solid #d62a2a",
          padding: "10px",
          backgroundColor: "#ee1212",
        }}
        onClick={incrementHandler}
      >
        Increment
      </button>

      <br /><br />

      <h3>Counter: {counter}</h3>
    </div>
  );
};

export default UseMemos;