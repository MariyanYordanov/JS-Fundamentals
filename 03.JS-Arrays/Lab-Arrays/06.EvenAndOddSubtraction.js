function evenAndOddSubtraction(arr){
    let evenSum = 0;
        let oddSum = 0;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element % 2 == 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6]); // 3
evenAndOddSubtraction([3,5,7,9]);     // -24
evenAndOddSubtraction([2,4,6,8,10]);  // 30