
const phrase = ("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas.")

function secretMessage(str){
    return Array.from(new Set(str.replace(?[^\w\s]/gi, "").split(" ").filter((word, i, array) => array.indexOf(word) !==array.lastIndexOf(word))));
                                                                            ))
}
console.log(secretMessage(anotherTest));

module.exports = secretMessage;


