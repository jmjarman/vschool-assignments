import React from "react";
import TodoItemContainer from "./TodoItemContainer.js";
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
        this.editTodo = this.editTodo.bind(this);
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
    editTodo(id, editTodo){
    axios.put(`https://api.vschool.io/jmjarman/todo/${id}`, editTodo).then(response=>{
let newEdit = response.data;
        this.setState(prevState => {

            const newTodos = prevState.todos.map((todo)=>{
                if(todo._id ===id){
                    return newEdit
                }else{
                    return todo;
                }
            });
                return{
                    ...prevState,
                    todos:newTodos
                }
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
                        <TodoItemContainer
                            todo={item}
                            key={item.title + i}
                            deleteTodo={this.deleteTodo}
                            editTodo={this.editTodo}
                            />
                    )
                })}
            </div>
            </center>
        )
    }
}

export default TodoList;
