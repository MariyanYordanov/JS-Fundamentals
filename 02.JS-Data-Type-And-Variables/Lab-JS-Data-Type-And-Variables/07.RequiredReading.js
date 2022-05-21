function reading(pages,pagesReadingPerHour,daysConstraints){
    let totalTimePerOneBok = pages / pagesReadingPerHour;
    let hoursPerDay = totalTimePerOneBok / daysConstraints;
    console.log(hoursPerDay);
}

reading(212,20,2); // 5.3