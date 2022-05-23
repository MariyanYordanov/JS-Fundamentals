function triangleArea(a,b,c){
    // A = √(s(s - a)(s - b)(s - c)), s = (a + b + c) / 2
    let s = (a + b + c) / 2;
    let areaSquare = s * ( s - a ) * ( s - b ) * ( s - c );
    let A = Math.sqrt(areaSquare);
    console.log(A);
}

triangleArea(2,3.5,4); // 3.4994419197923547