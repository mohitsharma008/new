import logo from "./logo.svg";
import React, { useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:4000/test").then((res) => console.log(res));
  });
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
