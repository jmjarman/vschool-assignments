function print(arr) {
    var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
                  "myself", "I'm", "so", "pretty"];
console.log(arr.join(" "))
}
print(lyrics);


function reverse(arr) {
    var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];
console.log(arr.reverse().join(" "));
}
//
function everyOther(arr) {
    var everyOtherLyric=[];
    
    for(var i=0; i<arr.length; i +=2){
        everyOtherLyric.push(arr[i])
    
    var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


console.log(everyOtherLyric.join(" "))
    }
    everyOther(lyrics);
    
    
    //
    
    function bonusFunc(ary){
    var bonusArray = [];
    for (var i = 0; i < ary.length; i++){
        if (i % 2 === 1){
        bonusArray.push(ary[i]);
        bonusArray.push(ary[i-1]);
        }
    }    
   return bonusArray.join(" ");
}

console.log(bonusFunc(lyrics));
    
    
    
    
    