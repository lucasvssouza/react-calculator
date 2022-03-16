import calculator from "./calculator.css";
import { useState } from "react";

export const Calculator = () => {
  const [getPrevious, setPrevious] = useState("");
  const [getCurrent, setCurrent] = useState("");
  const [getOperand, setOperand] = useState("");
  const [getResult, setResult] = useState(false);

  /// Função que limpa a calculadora
  function clearData() {
    setPrevious("");
    setCurrent("");
    setOperand("");
  }
  /// Função que limpa a calculadora

  /// Função que remove o ultimo digito
  function removeData() {
    setCurrent(getCurrent.slice(0, -1));
  }
  /// Função que remove o ultimo digito

  /// Função que exibe o resultado
  function resultButton() {
    if (
      getOperand === "+" &&
      getPrevious !== null &&
      getPrevious !== "" &&
      getCurrent !== null &&
      getCurrent !== ""
    ) {
      setCurrent(parseFloat(getPrevious) + parseFloat(getCurrent));
      setOperand("");
      setPrevious("");
      setResult(true);
    }
    if (
      getOperand === "-" &&
      getPrevious !== null &&
      getPrevious !== "" &&
      getCurrent !== null &&
      getCurrent !== ""
    ) {
      setCurrent(parseFloat(getPrevious) - parseFloat(getCurrent));
      setOperand("");
      setPrevious("");
      setResult(true);
    }
    if (
      getOperand === "*" &&
      getPrevious !== null &&
      getPrevious !== "" &&
      getCurrent !== null &&
      getCurrent !== ""
    ) {
      setCurrent(parseFloat(getPrevious) * parseFloat(getCurrent));
      setOperand("");
      setPrevious("");
      setResult(true);
    }
    if (
      getOperand === "/" &&
      getPrevious !== null &&
      getPrevious !== "" &&
      getCurrent !== null &&
      getCurrent !== ""
    ) {
      setCurrent(parseFloat(getPrevious) / parseFloat(getCurrent));
      setOperand("");
      setPrevious("");
      setResult(true);
    }
  }
  /// Função que exibe o resultado

  /// Função que identifica o número e salva
  function numberButton(e) {
    var value = getCurrent.toString();
    if (
      (value.indexOf(".") === -1 || e.target.innerHTML !== ".") &&
      getResult === false
    ) {
      setCurrent(value + e.target.innerHTML);
    } else {
      setCurrent(value);
    }
    if (getResult) {
      setCurrent(e.target.innerHTML);
      setResult(false);
    }
  }
  /// Função que identifica o número e salva

  /// Função que identifica a operação e mostra o resultado caso já exista uma operação pendente
  function operandButton(e) {
    if (e.target.innerHTML === "+" && getCurrent != null && getCurrent !== "") {
      setCurrent("");
      setPrevious(parseFloat(getCurrent));
      setOperand("+");
      resultButton();
    }
    if (e.target.innerHTML === "-" && getCurrent != null && getCurrent !== "") {
      setCurrent("");
      setPrevious(getCurrent);
      setOperand("-");
      resultButton();
    }
    if (e.target.innerHTML === "/" && getCurrent != null && getCurrent !== "") {
      setCurrent("");
      setPrevious(getCurrent);
      setOperand("/");
      resultButton();
    }
    if (e.target.innerHTML === "*" && getCurrent != null && getCurrent !== "") {
      setCurrent("");
      setPrevious(getCurrent);
      setOperand("*");
      resultButton();
    }
  }
  /// Função que identifica a operação e mostra o resultado caso já exista uma operação pendente

  return (
    <div className="App">
      <div className="grid-container">
        <div className="output">
          <label className="previous-operand">
            {getPrevious}
            {getOperand}
          </label>
          <label className="current-operand">{getCurrent}</label>
        </div>

        <button className="span-two" onClick={clearData}>
          AC
        </button>
        <button onClick={removeData}>DEL</button>

        <button onClick={(e) => operandButton(e)} className="operator">
          /
        </button>

        <button onClick={(e) => numberButton(e)}>1</button>
        <button onClick={(e) => numberButton(e)}>2</button>
        <button onClick={(e) => numberButton(e)}>3</button>

        <button onClick={(e) => operandButton(e)} className="operator">
          *
        </button>

        <button onClick={(e) => numberButton(e)}>4</button>
        <button onClick={(e) => numberButton(e)}>5</button>
        <button onClick={(e) => numberButton(e)}>6</button>

        <button onClick={(e) => operandButton(e)} className="operator">
          +
        </button>

        <button onClick={(e) => numberButton(e)}>7</button>
        <button onClick={(e) => numberButton(e)}>8</button>
        <button onClick={(e) => numberButton(e)}>9</button>

        <button onClick={(e) => operandButton(e)} className="operator">
          -
        </button>

        <button onClick={(e) => numberButton(e)} className="span-two">
          .
        </button>

        <button onClick={(e) => numberButton(e)}>0</button>

        <button onClick={resultButton} className="operator">
          =
        </button>
      </div>
    </div>
  );
};
