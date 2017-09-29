function isPalindrome(word){
    var simplifiedString = word.toLowerCase().replace(/\W/g, "");
    return simplifiedString.split("").reverse().join("") === simplifiedString;
}

module.exports = isPalindrome;
