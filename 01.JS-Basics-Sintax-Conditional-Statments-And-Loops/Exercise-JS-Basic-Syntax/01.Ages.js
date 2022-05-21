function age(condition){
    let personAge = '';
    if (condition >= 0 && condition <= 2) {
        personAge = 'baby';
    } else if (condition > 2 && condition <= 13) {
        personAge = 'child';
    } else if (condition > 13 && condition <= 19) {
        personAge = 'teenager';
    } else if (condition > 19 && condition <= 65) {
        personAge = 'adult';
    } else if (condition > 65 ) {
        personAge = 'elder';
    } else {
        personAge = 'out of bounds';
    }
    console.log(personAge);
}

age(0);