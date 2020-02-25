import React from "react";
import StarWarsClassBased from "./components/StarWarsClassBased";
import StarWarsHooksBased from "./components/StarWarsHooksBased";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StarWarsClassBased />
      <StarWarsHooksBased />
    </div>
  );
}

export default App;
