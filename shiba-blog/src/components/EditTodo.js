import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

export const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // Edit Description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch(`http://localhost:5434/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" color="yellow">
        Edit
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit Todo</DialogHeader>
        <DialogBody>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="yellow" onClick={function(e) {
            handleOpen();
            updateDescription(e);
          } }>
            <span>Edit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default EditTodo;
