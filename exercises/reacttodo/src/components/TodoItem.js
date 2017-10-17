import React from "react";
import { Button } from 'react-bootstrap';

function TodoItem(props){
    const container = {
        background: "blue",
    }

    return(
<div style={container}>
    <h1>{props.todo.title}</h1>
    <h3>{props.todo.description}</h3>
    <Button onClick={() => props.deleteTodo(props.todo._id)}>Delete</Button>
    <hr/>
</div>
  )
};

export default TodoItem;
