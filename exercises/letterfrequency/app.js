//return freq of letter

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency("slimy smelly solution"));


//print list without dups

function find_unique_characters(string) {
    var unique = '';
    for (var i = 0; i < string.length; i++) {
        if (unique.indexOf(string[i]) === -1) {
            unique += string[i];
        }
    }
    return unique;
}
console.log(find_unique_characters('slimy smelly solution'));
