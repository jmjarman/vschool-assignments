import React from "react";
import{connect} from "react-redux";
import Contact from "./Contact";
import{removeOne} from "../../redux/actions/index.js";

function ContactList(props){
    console.log(props);
    // const style = {
    //     display: "flex"
    // }
    return(
        <div>
        <button onClick={props.removeOne}>Remove Contact</button>
        {props.contactList.map((contact, i)=>{
            return <Contact key = {contact.firstName + i}
                        contact={contact}
                        />
        }
        )}
        </div>
    )

}
const mapStateToProps = (state)=>{
    return {contactList: state.contactList};

}

export default connect(mapStateToProps, {removeOne})(ContactList);
