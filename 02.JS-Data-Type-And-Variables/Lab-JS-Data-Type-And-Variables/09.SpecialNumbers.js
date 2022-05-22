function specialNumbers(number){
    
    for (let index = 1; index <= number; index++) {
        let sum = 0;
        let currentNumber = index;
        while(currentNumber >= 1) {
            let remainder = currentNumber % 10;
            sum += remainder;
            currentNumber = (currentNumber - remainder) / 10;
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${index} -> True`);
        } else {
            console.log(`${index} -> False`);
        }
    }
}

specialNumbers(20);
/*
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
*/