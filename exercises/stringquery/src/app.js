let objectifyUrl = function(url){
    let query = {};
    url - url.slice(url.indexOf("?")+1).split(/[=&]/);
    if(url.length<2) return{};
    for(let i = 0; i < url.length; i+=2 ){
    query[url[i]] = url[i+1]
}
return query
}

objectifyUrl("http://localhost:8080/monkeys")
