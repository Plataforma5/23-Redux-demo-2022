import React from "react";

import Botonera from "./Botonera";
import Display from "./Display";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [input, setInput] = React.useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const addMultiple = (e) => {
    e.preventDefault();
    const value = input || 0;
    const amount = parseInt(value, 10);
    setCount(count + amount);
  };

  const setFromDb = () => {
    fetch("/api/value")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  };

  return (
    <div className="App">
      <h3>Counter</h3>
      <Display value={count} />
      <Botonera
        handleChange={handleChange}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        addMultiple={addMultiple}
        input={input}
        setFromDb={setFromDb}
      />
    </div>
  );
}

export default App;
