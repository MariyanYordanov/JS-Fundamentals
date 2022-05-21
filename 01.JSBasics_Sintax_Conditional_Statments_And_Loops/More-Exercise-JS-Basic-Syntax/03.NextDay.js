function nextDay(year,month,day) {
    let nextDay = new Date(year,month - 1,day + 1);
    let months = nextDay.getMonth() + 1;
    let years = nextDay.getFullYear();
    let days = nextDay.getDate();
    console.log(`${years}-${months}-${days}`);
}

nextDay(2016, 9, 30);