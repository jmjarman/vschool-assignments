import React from "react";
import FormComponent from "./Component";

import{connect} from "react-redux";
import{memes} from "../../redux/actions"

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            inputs: {
                title: "",
                imgUrl: ""
            }
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleChange(e){
    e.persist()
    this.setState((prevState)=>{
        return{
            inputs:{
                ...prevState.inputs,
                [e.target.title]: e.target.value
            }
        }
    }
)
}
handleSubmit(e){
    e.preventDefault();
    this.props.addCountry(this.state.inputs)
    this.setState({
            inputs: {
                title: "",
                imgUrl: ""
            }
        })
    }




render(){
    return (
        <FormComponent
            handleChange = {this.handleChange}
            inputs = {this.state.inputs}
            handleSubmit = {this.handleSubmit}/>


    )
}
}



export default connect(null, memes) (FormContainer)
