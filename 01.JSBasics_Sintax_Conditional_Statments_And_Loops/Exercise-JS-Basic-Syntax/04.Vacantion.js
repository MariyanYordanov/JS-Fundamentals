function vacantion(numberOfPeople,typeOfGroup,dayOfWeek){
    let price = 0.0;
    if (typeOfGroup === "Students") {
        if (dayOfWeek === "Friday") {
            price = 8.45;
        } else if (dayOfWeek === "Saturday") {
            price = 9.80;
        } else if (dayOfWeek === "Sunday") {
            price = 10.46;
        }
    } else if (typeOfGroup == "Business"){
        if (dayOfWeek === "Friday") {
            price = 10.90;
        } else if (dayOfWeek === "Saturday") {
            price = 15.60;
        } else if (dayOfWeek === "Sunday") {
            price = 16;
        }
    } else if (typeOfGroup == "Regular"){
        if (dayOfWeek === "Friday") {
            price = 15;
        } else if (dayOfWeek === "Saturday") {
            price = 20;
        } else if (dayOfWeek === "Sunday") {
            price = 22.50;
        }
    }

    if (typeOfGroup === "Students" && numberOfPeople > 29) {
        price *= 0.85;
    }

    if (typeOfGroup === "Business" && numberOfPeople > 99) {
        numberOfPeople -= 10;
    }

    if (typeOfGroup === "Regular" && (numberOfPeople > 9 && numberOfPeople < 21)) {
        price *= 0.95;
    }

    let totalPrice = numberOfPeople * price;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(30,"Students","Sunday"); // Total price: 266.73
vacantion(40,"Regular","Saturday"); // Total price: 800.00
