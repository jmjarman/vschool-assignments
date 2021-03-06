import React from "react";

function FormComponent(props){
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
            <input onChange={props.handleChange} value={props.inputs.name} name="name" type="text" placeholder = "Country Name"/>
            <input onChange={props.handleChange} value={props.inputs.imgUrl} name="imgUrl" type="text" placeholder ="Country Flag"/>
            <button>Add to Bucket List</button>
            </form>
        </div>
    )
}

export default FormComponent;
