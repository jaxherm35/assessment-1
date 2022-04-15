const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("Input Password", function(password){
    
    if(password.length >= 10)
    console.log('password accepted');

    if(password.length < 10)
    console.log('password is incorrect');


    reader.close();
});