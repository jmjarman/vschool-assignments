import React from "react";
import TodoItem from "./TodoItem.js";
import axios from "axios";
import { Button } from 'react-bootstrap';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: {
                title: "",
                description: ""
            }
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postTodo = this.postTodo.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/jmjarman/todo").then(response => {
            this.setState({
                todos: response.data.reverse()
            });
        });
    }

    postTodo() {
        axios.post(`https://api.vschool.io/jmjarman/todo/`, this.state.newTodo).then(response => {
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    newTodo:{
                        title: "",
                        description: "",
                    }
                }
            })
        });
    }

    deleteTodo(id) {
        axios.delete(`https://api.vschool.io/jmjarman/todo/${id}`).then(response => {

            this.setState(prevState => {
                const newArr = prevState.todos.filter(item => item._id !== id)
                return {
                    todos: newArr
                }
            });
        });
    }
//enter editTodo
    editTodo(id){
    axios.put(`https://api.vschool.io/jmjarman/todo/${id}`, this.state.editTodo).then(response=>{
        this.setState(prevState => {

        })
    })
    }



    handleChange(event) {
        event.persist();

        this.setState((prevState) => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [event.target.name]: event.target.value
                }
            }
        });
    }

    render() {
        return (
            <center>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={this.state.newTodo.title}
                    name="title"
                    onChange={this.handleChange}
                    />
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.newTodo.description}
                    name="description"
                    onChange={this.handleChange}/>

                <Button onClick={this.postTodo}>Add todo</Button>
                {this.state.todos.map((item, i) => {
                    return (
                        <TodoItem
                            todo={item}
                            key={item.title + i}
                            deleteTodo={this.deleteTodo}/>
                    )
                })}
            </div>
            </center>
        )
    }
}

export default TodoList;
