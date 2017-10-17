import React from "react";

function TodoComponent(props){
    const imgSize = {
        width: "20%",

    }

    return (
        <div>
            <img style={imgSize} src={props.image}/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default TodoComponent
