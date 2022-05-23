function gladiator(lostFightsCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let sum = 0.0;
    for (let index = 1; index <= lostFightsCount; index++) {
        if (index % 2 == 0) {
            sum += helmetPrice;
        }

        if (index % 3 == 0) {
            sum += swordPrice;
        }

        if ( index % 6 == 0) {
            sum += shieldPrice;
        }

        if ( index % 12 == 0) {
            sum += armorPrice;
        }
    }

    console.log(sum);
}

gladiator(23,12.50,21.50,40,200); 
/*
Gladiator expenses: 608.00 aureus
*/