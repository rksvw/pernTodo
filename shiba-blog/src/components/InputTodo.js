import React, { Fragment, useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const InputTodo = () => {
  const [description, setDescription] = useState("Hello, world!");

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5434/todos/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5 text-xl font-semibold">Pern Todo List</h1>
      <form className="flex gap-1 justify-center mt-5" onSubmit={onSubmitForm}>
        <div className="w-80">
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button color="green" size="sm" onClick={onSubmitForm}>
          Add
        </Button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
