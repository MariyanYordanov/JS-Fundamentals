function englishName(number) {
    let digit = Number(number) % 10;
    let print = '';
    if ( digit === 1 ) {
        print = 'one';
    } else if ( digit === 2 ) {
        print = 'two';
    } else if ( digit === 3 ) {
        print = 'three';
    } else if ( digit === 4 ) {
        print = 'four';
    } else if ( digit === 5 ) {
        print = 'five';
    } else if ( digit === 6 ) {
        print = 'six';
    } else if ( digit === 7 ) {
        print = 'seven';
    } else if ( digit === 8 ) {
        print = 'eight';
    } else if ( digit === 9 ) {
        print = 'nine';
    } else if ( digit === 0 ) {
        print = 'zero';
    } 

    console.log(print);
}

englishName(512); // two
