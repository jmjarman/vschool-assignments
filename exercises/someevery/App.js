function every(arr, f){

for(let i = 0; i<arr.length; i++){
    let current = arr[i]
    if(!f(current)){
        return false;
    }
}
return true;
}






function some(arr, )
for(let i =0; iarr.length; i++){
    let current = arr[i];
    if(f(current)){
        return true;
        
    }
return false;    
}

//callback
function map(arr, f){
    let output = []
        for(let i =0; i , arr.length; i++){
            let newElement=(f(arr[i], i))
            
        
        }
    return output;
}