import React from "react";
import {connect} from "react-redux";
import{memes} from "../../redux/actions";

function Meme(props){
    const style = {
        backgroundImage: `url(${props.meme.imgUrl})`,
        backgroundSize: "cover",
        width: "500px",
        height: "500px",
        color: "white",
        border: "1px black solid",
        margin: "20px",
        display: "inline-block",
        textAlign: "center"


    }
    console.log(props)
    return(
        <div style = {style}>
            <h4>{props.meme.title}</h4>
            <h4>{props.meme.footer}</h4>
            <button onClick ={() =>{props.deleteMeme(props.index)}}>Remove</button>
            <button onClick ={() =>{props.editMeme(props.index)}}>Edit</button>
        </div>
    )

}
export default connect(null,memes) (Meme);
