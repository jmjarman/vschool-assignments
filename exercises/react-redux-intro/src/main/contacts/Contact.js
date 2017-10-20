import React from "react";


function Contact(props){
    // const style={
    //     width: "50%",
    //     margin: "100px",
    //     display: "flex",
    //     justifyContent: "space-between",
    //     position: "relative",
    //     top: "90%",
    //     transform: "translateY(90%)",
    //     fontSize: "19px"
    // }

    return(
        <div>
        <h3>{props.contact.firstName}</h3>
        <h3>{props.contact.lastName}</h3>
        <h3> {props.contact.phone}</h3>
        </div>
    )
}
export default Contact
