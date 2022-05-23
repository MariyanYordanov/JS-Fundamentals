function TriplesOfLatinLetters(number){
    let letters = Number(number);
    for (let i = 0; i < letters; i++) {
        for (let j = 0; j < letters; j++) {
            for (let k = 0; k < letters; k++) {
                let iLetter = String.fromCharCode(97 + i);
                let jLetter = String.fromCharCode(97 + j);
                let kLetter = String.fromCharCode(97 + k);
               console.log(`${iLetter}${jLetter}${kLetter}`);
            }
        }
    } 
}

TriplesOfLatinLetters('3');