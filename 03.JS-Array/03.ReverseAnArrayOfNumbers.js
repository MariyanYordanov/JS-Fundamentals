function reverse(n,inputArray){
    let arr = [];
    for (let index = 0; index < n; index++) {
        arr.push(inputArray[index]);
    }

    let result = '';
    for (let index = arr.length - 1; index >= 0; index--) {
        result += `${arr[index]} `;
    }

    console.log(result);
}

reverse(3,[10, 20, 30, 40, 50]);  // 30 20 10
reverse(4, [-1, 20, 99, 5]);      // 5 99 20 -1
reverse(2, [66, 43, 75, 89, 47]); // 43 66