function lowerToUpper(letter){
    let ASCII = letter.charCodeAt(0);
    if ( ASCII >= 97 && ASCII <= 122 ) {
        console.log('lower-case');
    } else if ( ASCII >= 65 && ASCII <= 90 ) {
        console.log('upper-case');
    }
}

lowerToUpper('L'); // upper-case
lowerToUpper('f'); // lower-case