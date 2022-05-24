import React from "react";

import Botonera from "./Botonera";
import Display from "./Display";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>Counter</h3>
      <Display />
      <Botonera />
    </div>
  );
}

export default App;
