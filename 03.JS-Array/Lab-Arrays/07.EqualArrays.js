function equalArrays(firstArray,secondArray){
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(firstArray[i]);
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10','20','30'], ['10','20','30']);
/*
Arrays are identical. Sum: 60
*/
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
/*
Arrays are not identical. Found difference at 2 index
*/