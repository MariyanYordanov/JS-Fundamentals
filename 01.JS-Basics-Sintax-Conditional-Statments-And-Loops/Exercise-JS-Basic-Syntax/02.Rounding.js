function rounding(number,precision){
    if (precision > 15) {
        precision = 15;
    }
    let roundedNumber = number.toFixed(precision);
    let print = Number(roundedNumber);
    console.log(print);
}

rounding(10.5,3); // output - 10.5