function login(input){
    let username = input[0];
    let password = username.split('').reverse().join('');
    
    for (let index = 1; index < input.length; index++) {
        if(password !== input[index]) {
            if (index < 4) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${username} blocked!`);
            return;
            }
        } else if (password === input[index] && index <= 4){
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

login(['Acer','login','go','let me in','recA']);
/*  Incorrect password. Try again.
    Incorrect password. Try again.
    Incorrect password. Try again.
    User Acer logged in.
*/

login(['sunny','rainy','cloudy','sunny','not sunny']);
/*
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User sunny blocked!
*/