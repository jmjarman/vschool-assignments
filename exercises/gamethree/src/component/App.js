import React from "react";
function gameOf3(num, count){
    if(num ===1) return count;
    if( num % 3 ===0) {
    return gameOf3(num/3, count)
}   else if ((num-1 % 3 ===0){
    return gameOf3((num-1)/3, count);
    }else{
    return game Of3((num+1)/3), count);    
    }


}
