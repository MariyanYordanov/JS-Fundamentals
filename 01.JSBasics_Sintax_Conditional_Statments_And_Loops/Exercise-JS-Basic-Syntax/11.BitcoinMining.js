function mining(shiftDays){

    let leva = 0;
    let firstBitcoin = 0;
    let goldPrice =  67.51;
    let bitcoinPrice = 11949.16;
    
    for (let index = 0; index < shiftDays.length; index++) {
        let gold = Number(shiftDays[index]);
        if ((index + 1) % 3 === 0) {
            gold *= 0.7;
        }
        
        leva += gold * goldPrice;
        
        if(leva >= bitcoinPrice && firstBitcoin === 0) {
            firstBitcoin = index + 1;
        }
    }
    
    let bitcoins =  leva / bitcoinPrice;
    let money = leva % bitcoinPrice;
    console.log(`Bought bitcoins: ${Math.floor(bitcoins)}`);
    if(firstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

mining([50,100]);
/*
Bought bitcoins: 0
Money left: 10126.50 lv.
*/
mining([100, 200, 300]);
/*
Bought bitcoins: 2
Day of the first purchased bitcoin: 2
Left money: 10531.78 lv.
*/