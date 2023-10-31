import React from "react";
import classes from "./DisplayTasks.module.css";
import { Button, Col, FormCheck, Row } from "react-bootstrap";
const DisplayTasks = (props) => {
  const deleteHandler = (e, id) => {
    e.preventDefault();
    props.delTask(id);
  };

  const taskCompletedHandler = (e, id) => {
    e.preventDefault();
    props.taskCompleted(id);
  };


  return (
    <div>
      {props.tasks.length !== 0 &&
        props.tasks.map((task) => (
            task.completed===false && 
          <>
          <div className={classes.task}>
            
              {" "}
              <FormCheck
                onChange={(e) => taskCompletedHandler(e, task.id)}
              ></FormCheck>{" "}
              <h1>{task.taskName}</h1>{" "}
              <Button
                variant="danger"
                onClick={(e) => deleteHandler(e, task.id)}
              >
                Delete
              </Button>{" "}
          
            </div>
          </>
        ))}
    </div>
  );
};

export default DisplayTasks;
