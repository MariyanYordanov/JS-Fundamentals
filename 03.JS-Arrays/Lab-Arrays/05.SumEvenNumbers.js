function sumEvenNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = parseInt(arr[i]); // or Number(arr[i])
        if (element % 2 == 0) {
            sum += element;
        }
        
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']); // 12
sumEvenNumbers(['3','5','7','9']);         // 0
sumEvenNumbers(['2','4','6','8','10']);    // 30