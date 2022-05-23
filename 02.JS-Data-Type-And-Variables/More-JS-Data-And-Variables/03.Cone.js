function coneCalculations(radius,height){
    // Volume = (1/3)π * r^2 * h
    // Total Surface Area = π * r * (r + √(r^2 + h^2))
    let volume = (Math.PI * Math.pow(radius,2) *  height) / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(( Math.pow(radius,2) +  Math.pow(height,2))));
    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`);
}

coneCalculations(3,5); 
/*
volume = 47.1239
area = 83.2298
*/