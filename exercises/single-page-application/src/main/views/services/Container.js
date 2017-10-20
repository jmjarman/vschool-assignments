import React from "react";
import {Link} from "react-router-dom";
import ServicesComponent from "./Component";

class ServicesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      services: []
    }
    this.genLinks = this.genLinks.bind(this);
    this.searchById = this.searchById.bind(this);
  }

  componentDidMount(){
    this.setState({
      services: [
        {
          title: "mow lawn",
          price: 20,
          _id: "214365231"
      },
      {
        title: "rake leaves",
        price: 50,
        _id: "214afer23r31"
      },
      {
        title: "fertilize lawn",
        price: 50,
        _id: "21436grwer1"
    }
    ]})
  }

  genLinks(){
      return this.state.services.map((service)=>{
          return (
              <Link
                  key={service._id}
                  to={`/services/${service._id}`}>{service.title}
              </Link>
            )
      })
  }

  searchById(id){
      return this.state.services.find((service)=>{
          return id === service._id
      }
    )
  }

  render(){
    return(
        <ServicesComponent
            genLinks={this.genLinks}
            searchById={this.searchById}/>
          )
  }
}

export default ServicesContainer;
