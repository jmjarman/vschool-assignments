import React from "react";

function Body(props){
    const imgSize = {
        width: "90%",

    }
    const container = {
        width: "340px",
        height: "500px",
        border: "black solid 10px",
        background: "blue",
        margin: "20px",
        paddingLeft: "20px",
        display: "inline-block"
    }

    const power = {
        color: "white",
        textAlign: "center",
    }

    const name = {
        color: "red",
        textAlign: "center"
    }

        return(
    <div style={container} onClick={()=>{props.click(props.phrase)}}>
        <h1 style={name}>{props.name}</h1>
        <h2 style={power}>{props.power}</h2>
        <img style = {imgSize} src={props.photo}alt=""/>

    </div>)
};

export default Body;
