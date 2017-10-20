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
    <input
        type="text"
        placeholder="Edit Title"
        value={props.editedTodo.title}
        name="title"
        onChange={props.handleEdit}
        />
    <input
        type="text"
        placeholder="Edit Description"
        value={props.editedTodo.description}
        name="description"
        onChange={props.handleEdit}/>
    <Button onClick={() => props.deleteTodo(props.todo._id)}>Delete</Button>
    <Button onClick={(event) => props.handleSubmit(event)}>Edit</Button>
    <Button onClick={() => props.saveTodo(props.todo._id)}>Save</Button>
    <hr/>
</div>
  )
};

export default TodoItem;
