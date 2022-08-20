import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [valueList, setvalueList] = useState('');
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    console.log(number);
    console.log(typeof number);
    setPrevValue((prevValue === null) ? (op === null) ? number : prevValue + number : '')
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };

  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };

  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };

  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
    setvalueList('')
  };

  const inputFunc = (value) => {
    // console.log(parseInt(value));
    setvalueList(prev => [...prev, String(value)])

    if (Number.isInteger(value)) {
      handleNum(parseInt(value));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className="caldiv">
      <div className="caltop">
        <div className="caltoptext1">{valueList}</div>
        <div className="caltoptext2">{prevValue}</div>
      </div>
      <div className="calbot">
        <div className="calbotinn">
          <ul>
            <li>
              <button onClick={() => inputFunc("c")} type="button">
                C
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc("del")} type="button">
                del
              </button>
            </li>
            <li style={{ backgroundColor: "#5e4bb6" }}>
              <button onClick={() => inputFunc("%")} type="button">
                %
              </button>
            </li>
            <li style={{ backgroundColor: "#5e4bb6" }}>
              <button onClick={() => inputFunc("/")} type="button">
                ÷
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(7)} type="button">
                7
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(8)} type="button">
                8
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(9)} type="button">
                9
              </button>
            </li>
            <li style={{ backgroundColor: "#5e4bb6" }}>
              <button onClick={() => inputFunc("x")} type="button">
                x
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(4)} type="button">
                4
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(5)} type="button">
                5
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(6)} type="button">
                6
              </button>
            </li>
            <li style={{ backgroundColor: "#5e4bb6" }}>
              <button onClick={() => inputFunc("-")} type="button">
                -
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(1)} type="button">
                1
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(2)} type="button">
                2
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(3)} type="button">
                3
              </button>
            </li>
            <li style={{ backgroundColor: "#5e4bb6" }}>
              <button onClick={() => inputFunc("+")} type="button">
                +
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(0)} type="button">
                0
              </button>
            </li>
            <li>
              <button onClick={() => inputFunc(".")} type="button">
                .
              </button>
            </li>
            <li style={{ flexBasis: "50%", backgroundColor: "#ed5700" }}>
              <button onClick={() => inputFunc("=")} type="button">
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
