function division(number){

    let divider = 0;

    if (number % 2 == 0) {
        divider = 2;
    }
    
    if (number % 3 == 0) {
        divider = 3;
    }

    if (number % 6 == 0) {
        divider = 6;
    }
    
    if (number % 7 == 0) {
        divider = 7;
    }

    if (number % 10 == 0) {
        divider = 10;
    }

    if (divider != 0) {
        console.log(`The number is divisible by ${divider}`);
    } else {
        console.log('Not divisible');
    }
}

division(30); // The number is divisible by 10
division(15); // The number is divisible by 3
division(12); // The number is divisible by 6
division(1643); // Not divisible