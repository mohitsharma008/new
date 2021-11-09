import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    axios.get("http://localhost:4000/test").then((res) => console.log(res));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:4000/api/users",
      data: form,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        console.log("success", response);
      })
      .catch(function (response) {
        console.log("failure", response);
      });
  };
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleInput(e)}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => handleInput(e)}
          name="password"
          placeholder="password"
        />
        <input
          type="text"
          onChange={(e) => handleInput(e)}
          name="name"
          placeholder="name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
