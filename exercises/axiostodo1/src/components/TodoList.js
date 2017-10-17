import React from "react";
import TodoComponent from "./TodoComponent";

import axios from "axios";


class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }


    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>{
            console.log(response.data)
            this.setState(()=>{
               return {
                 todos: response.data
               }
            })
        })
    }

    render(){
        let mappedTodos = this.state.todos.map((todo)=>{
          return <TodoComponent image={todo.image}
                                    name={todo.name}
                       />
        })

        return mappedTodos;
    }
}

export default TodoList;
