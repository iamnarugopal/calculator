import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
    setValue(value.concat(e.target.value));
  };
  const deleteLastValue = (e) => {
    setResult(result.slice(0, -1));
    setValue(result.slice(0, -1));
  };
  const clearHandler = (e) => {
    setResult("");
    setValue("");
  };
  const calculate = (e) => {
    setResult(eval(result).toString());
  };

  const char = [
    "C",
    "del",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="caldiv">
      <div className="caltop">
        <div className="caltoptext1">{value}</div>
        <div className="caltoptext2">{result}</div>
      </div>
      <div className="calbot">
        <div className="calbotinn">
          <ul>
            {char?.map((item, i) => {
              return (
                <li key={i}>
                  <input
                    onClick={
                      item === "C"
                        ? clearHandler
                        : item === "del"
                        ? deleteLastValue
                        : item === "="
                        ? calculate
                        : clickHandler
                    }
                    type="button"
                    value={item}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
