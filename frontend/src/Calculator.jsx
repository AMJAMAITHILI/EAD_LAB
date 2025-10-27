import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const handleCalc = async (e) => {
    e.preventDefault();
    if(num1 === "" || num2 === "") return setResult("Enter both numbers");

    const res = await fetch(
      `http://localhost:4000/api/calc/${operation}?num1=${num1}&num2=${num2}`
    );
    const data = await res.json();
    setResult(data.result ?? data.error);
  };

  return (
    <div>
      <h3>Calculator</h3>
      <form onSubmit={handleCalc}>
        <label>Number 1:</label><br/>
        <input value={num1} onChange={(e) => setNum1(e.target.value)} /><br/><br/>

        <label>Number 2:</label><br/>
        <input value={num2} onChange={(e) => setNum2(e.target.value)} /><br/><br/>

        <label>Operation:</label><br/>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select><br/><br/>

        <button type="submit">Calculate</button>
      </form>
      <p><b>Result:</b> {result}</p>
    </div>
  );
}
