import React from "react";
import{connect} from "react-redux";
import{countries} from "../../redux/"

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
            <button onClick={()=>{props.deleteCountry(props.index)}}>Delete</button>
        </div>
    )
}
export default connect(null, countries)(Country);
