import React, { Fragment, useState, useEffect } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import EditTodo from "./EditTodo";
import axios from "axios";

const TABLE_HEAD = ["Description", "Edit", "Delete"];

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5434/todos");
      const jsonData = await res.json();
    //   console.log(jsonData);
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // delete request

  const deleteTodo = async (id) => {
    axios.delete(`http://localhost:5434/todos/${id}`).catch((err) => {
      console.error(err.message);
    })

    setTodos(todos.filter(todo => todo.todo_id !== id));
    // try {
    //   const deleteTodo = await fetch(`http://localhost:5434/todos/${id}`, {
    //     method: "DELETE"
    //   });
    //   console.log(deleteTodo);
    // } catch (err) {
    //   console.error(err.message);
    // }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <Card className="h-full w-full overflow-scroll mt-5 ml-auto mr-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none opacity-70 font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              const isLast = todo.todo_id === todos.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={todo.todo_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {todo.description}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                    <EditTodo todo={todo} />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Button color="red" className="cursor-pointer" onClick={() => deleteTodo(todo.todo_id)}>Delete</Button>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </Fragment>
  );
};

export default ListTodo;