import React from 'react'

let endpoint = "http://localhost:8080/monkeys"
let query = {
    color: "black",
    species: "howler"
}
let stringifyurl = function(endpoint,query){
    let url = endpoint +"?";
    for(let key in query){
        url+= `${key}=${query[key]}&`;
}
return url.slice(0, -1)
}


export default App
