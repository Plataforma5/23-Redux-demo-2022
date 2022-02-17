import React, { useEffect } from "react";

import { increase, decrease, addMany } from "../redux/counter";
import { useDispatch } from "react-redux";

export default function Botonera() {
  const dispatch = useDispatch();
  const [number, setNumber] = React.useState("");

  const handleChange = ({ target }) => {
    setNumber(target.value);
  };

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const addMultiple = () => {
    const amount = parseInt(number, 10);
    dispatch(addMany(amount));
  };

  return (
    <>
      <div className="block">
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
      <div className="block">
        <input onChange={handleChange} value={number} />
        <button onClick={addMultiple}>Add</button>
      </div>
    </>
  );
}
