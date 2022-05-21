function integerOrFloat(first,second,third){
    let sum = first + second + third;
    let print = `${sum} - `;
    if (sum % 1 === 0) {
        print += 'Integer';
    } else {
        print += 'Float';
    }
    console.log(print);
}

integerOrFloat(9, 100, 1.1);   //110.1 - Float
integerOrFloat(100, 200, 303); // 603 - Integer