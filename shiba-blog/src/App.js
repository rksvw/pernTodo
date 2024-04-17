import "./App.css";
import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <InputTodo />
      <ListTodo />
    </Fragment>
  );
}

export default App;
