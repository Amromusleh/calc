import { useState } from "react";
import "./App.css";

export default function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("0");
  const [number1, setNumber1] = useState(0);
  const [action, setAction] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const zft = (a) => {
    setInput(Number(input + a.target.name));
  };

  function addnumber() {
    setNumber1(input);
    setAction("+");
    setInput("0");
  }

  function minues() {
    setNumber1(input);
    setAction("-");
    setInput("0");
  }

  function multiplyNumber() {
    setNumber1(input);
    setAction("*");
    setInput("0");
  }

  function dividedNumber() {
    setNumber1(input);
    setAction("/");
    setInput("0");
  }

  function clear() {
    setResult(0);
    setInput("0");
    setNumber1(0);
  }

  function equal() {
    let r = 0;
    if (action === "+") r = Number(number1) + Number(input);
    if (action === "-") r = Number(number1) - Number(input);
    if (action === "*") r = Number(number1) * Number(input);
    if (action === "/") r = Number(number1) / Number(input);

    setResult(r);
    setInput(r.toString());
  }

  function changeInput(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="all">
        <div className="res">{result}</div>
        <div className="writebar">
          <input value={input} onChange={changeInput} />
          <button onClick={equal}>=</button>
        </div>

        <div className="actions">
          <button onClick={multiplyNumber}>&times;</button>
          <button onClick={dividedNumber}>&divide;</button>
          <button onClick={addnumber}>+</button>
          <button onClick={minues}>-</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
      <div className="parent">
        <div className="keypad">
          {numbers.map((num) => (
            <div key={num}>
              <button className="button" name={num.toString()} onClick={zft}>
                {num}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
