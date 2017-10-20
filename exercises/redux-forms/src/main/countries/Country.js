import React from "react";

function Country(props){
    const style = {
        backgroundImage: `url(${props.country.imgUrl})`,
        backgroundSize: "cover",
        width: "500px",
        height: "350px",
        color: "black",
        border: "1px black solid",
        margin: "20px",
        display: "inline-block"

    }
    return (
        <div style = {style}>
            <h4>{props.country.name}</h4>
        </div>
    )
}
export default Country
