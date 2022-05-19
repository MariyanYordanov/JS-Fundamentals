function pyramid(base,increment) {

    let marble = 0;
    let stones = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let fundamend = Number(base);
    let height = Number(increment);
    let steps = Math.ceil(fundamend / 2);
    
    for (let floor = 1, layer = fundamend; floor <= steps; floor++,layer-=2) {
        
        let perimeter = (layer * 4) - 4;
        let insideStones = (layer - 2) * (layer - 2);
        
        if (floor === steps) {
            gold += layer * layer * height;
            break;
        }
        
        if (floor % 5 !== 0) {
            marble += perimeter * height;
            stones += insideStones * height;
        } else {
            lapisLazuli  += perimeter * height;
            stones += insideStones * height;
        }
    }
    
    let pyramidHeight = Math.floor(height * steps);
    
    console.log(`Stone required: ${Math.round(stones)}`);
    console.log(`Marble required: ${Math.round(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapisLazuli)}`);
    console.log(`Gold required: ${Math.round(gold)}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
};

pyramid(23,0.5);
/*
Stone required: 886
Marble required: 228
Lapis Lazuli required: 36
Gold required: 1
Final pyramid height: 6
*/
pyramid(12,1);
/*
Stone required: 220
Marble required: 128
Lapis Lazuli required: 12
Gold required: 4
Final pyramid height: 6
*/
pyramid(11,0.75);
/*
Stone required: 124
Marble required: 84
Lapis Lazuli required: 6
Gold required: 1
Final pyramid height: 4
*/