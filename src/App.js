import React, { useState } from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Hello, there!</h1>
      <DemoOutput />
      <Button />
    </div>
  );
};

export default App;
