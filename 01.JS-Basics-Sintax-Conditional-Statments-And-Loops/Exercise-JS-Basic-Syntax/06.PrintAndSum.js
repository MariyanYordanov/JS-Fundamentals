function printAndSum(start,end){
    let sum = 0;
    let print = '';
    for (let index = start; index <= end; index++) {
        sum += index;
        print += `${index} `;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10); // 5 6 7 8 9 10
                   //Sum: 45
