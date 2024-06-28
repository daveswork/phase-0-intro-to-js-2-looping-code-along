// Code your solutions in this file
function writeCards(names) {
    const thankYous = [];
    for (let i = 0; i < names.length; i++){
        thankYous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYous;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
