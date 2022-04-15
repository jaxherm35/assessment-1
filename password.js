const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Input Password", function(input){
    tokens = input.split('')

    let character = [1,2,3,4,5,6,7,8,9,10,11]
    let password = []
    
    if(password >= character.length)
    console.log('password accepted');

    if(password < character.length)
    console.log('password is incorrect');


    reader.close
});