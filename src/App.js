import React,  { useState, useEffect, useRef} from "react";
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus())

  const handleClick = (e) => {
    setResult(result.concat(e.target.value))
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const clear = () => {
    setResult("")
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch(error) {
        setResult("Error")
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="calculator">
        <form>
          <input type="text" ref={inputRef} value={result} placeholder="0"/>
        </form>
        
        <div className="tastiera">
          <button id="clear" onClick={clear}>C</button>
          <button className="brackets" value="(" onClick={handleClick}>(</button>
          <button className="brackets" value=")" onClick={handleClick}>)</button>
          <button className="operator" value="*" onClick={handleClick}>&times;</button>
          <button className="numbers" value="7" onClick={handleClick}>7</button>
          <button className="numbers" value="8" onClick={handleClick}>8</button>
          <button className="numbers" value="9" onClick={handleClick}>9</button>
          <button className="operator" value="+" onClick={handleClick}>+</button>
          <button className="numbers" value="4" onClick={handleClick}>4</button>
          <button className="numbers" value="5" onClick={handleClick}>5</button>
          <button className="numbers" value="6" onClick={handleClick}>6</button>
          <button className="operator" value="-" onClick={handleClick}>-</button>
          <button className="numbers" value="1" onClick={handleClick}>1</button>
          <button className="numbers" value="2" onClick={handleClick}>2</button>
          <button className="numbers" value="3" onClick={handleClick}>3</button>
          <button className="operator" value="/" onClick={handleClick}>/</button>
          <button className="numbers" value="." onClick={handleClick}>.</button>
          <button className="numbers" value="0" onClick={handleClick}>0</button>
          <button id="backspace" onClick={backspace}><i class="fas fa-backspace"></i></button>
          <button id="result" onClick={calculate}>=</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
