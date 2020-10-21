import React from "react";
import "./App.css";
import Recepes from "./Recepes/Recepes";

const App = () => {
  return (
    <div className="main-bg">
      <div className="overlay">
        <Recepes />
      </div>
    </div>
  );
};

export default App;
