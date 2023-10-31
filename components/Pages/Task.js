import { FormLabel, Form, FormControl, Col, Button } from "react-bootstrap";
import DisplayTasks from "./DisplayTasks";
import classes from "./Task.module.css";

import React, { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import { useRouter } from "next/router";

const Task = () => {
    const router=useRouter()
  const [tasks, addTasks] = useState([]);
  const [task, addTask] = useState({ taskName: "" });

  const nameHandler = (e) => {
    addTask({ id: Math.random(), taskName: e.target.value, completed: false });
  };

  const submitHandler = (e) => {
    addTasks([...tasks, task]);
    addTask({ taskName: "" });
  };

  const delTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    addTasks(updatedTasks);
  };

  const taskCompleted = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        const newTask = { ...task, ["completed"]: true };

        const updated = tasks.filter((tas) => tas.id !== id);


        const updatedFinal=[...updated, newTask]
        addTasks(updatedFinal)

        console.log(tasks)
      }
    });
  };

  const tasksCompletedHandler=(e)=>{
    e.preventDefault()

    router.push('addtask/completed')
  }

  return (
    <>
      <div className={classes.completed}>
        <Button variant="success" onClick={tasksCompletedHandler}>Tasks Completed</Button>
      </div>
      <div className={classes.heading}>
        <h1>Tasks</h1>
      </div>

      <DisplayTasks
        tasks={tasks}
        delTask={delTask}
        taskCompleted={taskCompleted}
      ></DisplayTasks>

      <Form>
        <Col>
          <FormLabel>Task Name</FormLabel>
        </Col>

        <FormControl
          onChange={nameHandler}
          required
          value={task.taskName}
        ></FormControl>
        <Button onClick={submitHandler}>ADD Task</Button>
      </Form>
    </>
  );
};

export default Task;
