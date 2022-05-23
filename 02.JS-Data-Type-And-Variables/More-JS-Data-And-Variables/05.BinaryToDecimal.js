function binaryToDecimal(binary){
    // Decimal = (Bn-1 × 2^n-1) + ... + (Bn1 × 2^1) + (Bn0 × 2^0)
    let octaNumber = binary.toString(8);
    let parseNumber = parseInt(octaNumber, 2);
    let decimalNumber = parseNumber.toString(10);
    console.log(decimalNumber);
}

binaryToDecimal(00001001); // 9
binaryToDecimal(11110000); // 240 
// WRONG TASK - the input must be string !!