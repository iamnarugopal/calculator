import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    var v = e.target.value;
    if (
      v === "+" ||
      v === "-" ||
      v === "/" ||
      v === "*" ||
      v === "%" ||
      v === "."
    ) {
      var str1 = value;
      var last = value.charAt(value.length - 1);
      if (
        last === "+" ||
        last === "-" ||
        last === "/" ||
        last === "*" ||
        last === "." ||
        last === "%"
      ) {
        var str2 = str1.slice(0, -1) + v;
        setResult(str2);
        setValue(str2);
      } else {
        setResult(result.concat(v));
        setValue(value.concat(v));
      }
    } else {
      setResult(result.concat(v));
      setValue(value.concat(v));
    }
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
    let inPersantage = value.includes("%");
    if (inPersantage) {
      let a = value.split("%");
      let temp = ((a[1] / 100) * a[0]).toFixed(2);
      setResult(temp);
    } else {
      // eslint-disable-next-line
      setResult(eval(result).toFixed(2).toString());
    }
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
