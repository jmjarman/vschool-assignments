import React from "react";

function Meme(props){
    const style = {
        backgroundImage: `url(${props.meme.imgUrl})`,
        backgroundSize: "cover",
        width: "500px",
        height: "350px",
        color: "black",
        border: "1px black solid",
        margin: "20px",
        display: "inline-block"
    }
    return(
        <div style = {style}>
            <h4>{props.meme.name}</h4>
        </div>
    )

}
export default Meme
