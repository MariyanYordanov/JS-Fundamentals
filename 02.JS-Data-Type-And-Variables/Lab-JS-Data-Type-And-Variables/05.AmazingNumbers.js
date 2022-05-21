function  amazingNumbers(number) {
    let stringNumber = number.toString();
    let sum = 0;
    for (let index = 0; index < stringNumber.length; index++) {
        sum += Number(stringNumber[index]);
    }
    
    let print = `${sum} Amazing? `;
    if (sum === 9) {
        print += 'True';
    } else {
        print += 'False';
    }
    console.log(print);
}

amazingNumbers(1233);