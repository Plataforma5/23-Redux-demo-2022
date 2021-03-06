import React from "react";

export default function Botonera({
  handleIncrease,
  handleDecrease,
  handleChange,
  addMultiple,
  input,
  setFromDb,
}) {
  return (
    <>
      <div className="block">
        <button onClick={handleIncrease}>+1</button>
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
