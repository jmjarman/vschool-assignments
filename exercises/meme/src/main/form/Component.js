import React from "react";

function FormComponent(props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
            <input onChange={props.handleChange} value={props.inputs.title} name="name" type="text" placeholder = "Title"/>
            <input onChange={props.handleChange} value={props.inputs.title} name="name" type="text" placeholder = "Footer"/>
            <input onChange={props.handleChange} value={props.inputs.imgUrl} name="imgUrl" type="text" placeholder ="Image"/>
            <button>Add Meme</button>
            </form>
        </div>
    )
}

export default FormComponent;
