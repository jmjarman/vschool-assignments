import React from "react";

function Service(props){
  const id = props.match.params.id;
  const serviceInfo = props.searchById(id);
    return(
      <div>
          <h2>{serviceInfo.title} </h2>
          <p style={{fontStyle: "bold"}}>{`$${serviceInfo.price}`}</p>
      </div>
  )
}

export default Service;
