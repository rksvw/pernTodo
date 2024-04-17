import "./App.css";
import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
    <Navbar />
      <InputTodo />
      <ListTodo />
    </Fragment>
  );
}

export default App;
