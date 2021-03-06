function centuriesToMinutes(number){
    // Tropical year = 365.2422 
    // or 365 days , 5 hours , 48 minutes , 45 seconds.

    let years = number * 100;
    let daysInTropicalYear = Math.trunc(years * 365.2422);
    let hoursInDay = daysInTropicalYear * 24;
    let minutesInHour = hoursInDay * 60;

    console.log(`${number} centuries = ${years} years = ${daysInTropicalYear} days = ${hoursInDay} hours = ${minutesInHour} minutes`);
}

centuriesToMinutes(100);
/*
100 centuries = 10000 years = 3652422 days = 87658128 hours = 5259487680 minutes
*/ 