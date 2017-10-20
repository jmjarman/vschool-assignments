import React from "react";
import FormComponent from "./Component";

import{connect} from "react-redux";
import{countries} from "../../redux/actions";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            inputs: {
            name: "",
            imgUrl: "",
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
                [e.target.name]: e.target.value
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
                name: "",
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
export default connect(null, countries) (FormContainer)
