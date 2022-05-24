import React from "react";
import { increase, decrease, addMultiple } from "../redux/counter";
import { useDispatch } from "react-redux";

export default function Botonera() {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleAddMultiple = (e) => {
    e.preventDefault();
    dispatch(addMultiple(input));
  };

  return (
    <>
      <div className="block">
        <button onClick={() => dispatch(increase())}>+1</button>
        <button onClick={() => dispatch(decrease())}>-1</button>
      </div>
      <form onSubmit={handleAddMultiple} className="block">
        <input onChange={handleChange} value={input} />
        <button>Add</button>
      </form>
      {/* <button onClick={setFromDb}>Set value from DB</button> */}
    </>
  );
}
