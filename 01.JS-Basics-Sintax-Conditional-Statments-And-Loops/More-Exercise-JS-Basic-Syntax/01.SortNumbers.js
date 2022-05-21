function sortNumbers(N1,N2,N3) {

    let one = Number(N1);
    let two = Number(N2);
    let three = Number(N3);

    let first = 0;
    let second = 0;
    let third = 0;

    if(one > two && one > three) {
        first = one;
        if(two > three){
            second = two;
            third = three;
        } else {
            second = three;
            third = two;
        }
    } else if (two > one && two > three) {
        first = two;
        if(one > three){
            second = one;
            third = three;
        } else {
            second = three;
            third = one;
        }
    } else if (three > one && three > two) {
        first = three;
        if(one > two){
            second = one;
            third = two;
        } else {
            second = two;
            third = one;
        }
    }

    console.log(first);
    console.log(second);
    console.log(third);
}

sortNumbers(2,1,3);
/*
3
2
1
*/