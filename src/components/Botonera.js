import React from "react";
import { increase, decrease, addMany } from "../redux/counter";
import { useDispatch } from "react-redux";

export default function Botonera() {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const addMultiple = (e) => {
    e.preventDefault();
    const value = input || 0;
    const amount = parseInt(value, 10);
    dispatch(addMany(amount));
  };

  const setFromDb = () => {
    fetch("/api/value").then((res) => res.json());
    // .then((data) => setCount(data.value));
  };

  return (
    <>
      <div className="block">
        <button onClick={() => dispatch(increase())}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
      <form onSubmit={addMultiple} className="block">
        <input onChange={handleChange} value={input} />
        <button>Add</button>
      </form>
      <button onClick={setFromDb}>Set value from DB</button>
    </>
  );
}
