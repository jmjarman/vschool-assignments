function genLinkedList(n){
    if(n === 1) return{
        next: null,
        value: 1
    }
    return{
        next: genLinkedList(n - 1),
        value: n
    }

}
console.log(JSON.stringify(genLinkedList(4)));
