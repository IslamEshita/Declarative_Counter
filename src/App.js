import React from "react";
import { useState } from "react";

function App() {
  let [counter, changeCounter] = useState(0);
  window.changeCounter = changeCounter;
  return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>The counter value is currently: {counter}</h4>
    </div>
  );
}

export default App;
