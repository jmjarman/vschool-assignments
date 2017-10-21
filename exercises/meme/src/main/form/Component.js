import React from "react";

function FormComponent(props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
            <input onChange={props.handleChange} value={props.inputs.title} name="title" type="text" placeholder = "Title"/>
            <input onChange={props.handleChange} value={props.inputs.footer} name="footer" type="text" placeholder = "Footer"/>
            <input onChange={props.handleChange} value={props.inputs.imgUrl} name="imgUrl" type="text" placeholder ="Image"/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;
