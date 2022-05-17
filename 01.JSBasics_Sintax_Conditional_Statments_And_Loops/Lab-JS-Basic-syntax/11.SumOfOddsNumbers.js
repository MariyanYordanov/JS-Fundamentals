function solve(constraint){
    let counter = 0;
    let number = 1;
    let sum = 0;
    while (constraint > counter) {
        if(number % 2 != 0){
            console.log(number);
            sum += number;
            counter++;
        }
        number++;
    }
    console.log(`Sum: ${sum}`);
}

solve(3);