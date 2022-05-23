function sum(number){
    let num = number.toString();
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        let digit = Number(num[index]);
        sum += digit;
    }
    console.log(sum);
}

sum(245678); // 32