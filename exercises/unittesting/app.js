function describe(message, testFunc){
    try{
        testFunc();
    }catch (err){
        console.log("Failure", err)
    
    }
}

function add(a,b) {
    return a+b
}


describe("Testing the add function", function() {
    assert(add(1,2), 3)
    assert(add(-1,2), 1)
    assert(add(1,-2), -1)
    assert(add(-1,-2),-3)
});