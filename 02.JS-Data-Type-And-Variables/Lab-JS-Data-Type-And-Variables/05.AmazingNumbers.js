function  amazingNumbers(number) {
    let stringNumber = number.toString();
    let sum = 0;
    let print = `${stringNumber} Amazing? `;
    for (let index = 0; index < stringNumber.length; index++) {
        sum += Number(stringNumber[index]);
    }
    
    if (sum.toString().includes('9')) {
        print += 'True';
    } else {
        print += 'False';
    }
    console.log(print);
}

amazingNumbers(1233); // 9 Amazing? True