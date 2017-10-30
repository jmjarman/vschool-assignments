


function disemvowel(str){
  newObj = {}
  const noVowels = str.replace(/[aeiou\s/]/gi,'');
  const vowels = str.replace(/[^aeiou]/gi, '');
  newObj.str = noVowels.toLowerCase();
  newObj.vowels = vowels.toLowerCase();
  console.log(newObj)
}

disemvowel("Pickle Rick!")
