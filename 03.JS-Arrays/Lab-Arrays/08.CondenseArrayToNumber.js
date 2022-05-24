function condenseArrayToNumber(arr){
    let tempArray = arr;
    while (tempArray.length !== 1) {
        let resultArray = [];
        for (let index = 0; index < tempArray.length - 1; index++) {
            let newValue = tempArray[index] + tempArray[index + 1];
            resultArray[index] = newValue;
        }
        tempArray = resultArray;
    }
    console.log(tempArray[0]);
}

condenseArrayToNumber([2,10,3]);    // 25
condenseArrayToNumber([5,0,4,1,2]); // 35
condenseArrayToNumber([1]);         // 1