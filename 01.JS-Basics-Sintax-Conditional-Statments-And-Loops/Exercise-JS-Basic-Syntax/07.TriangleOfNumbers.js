function trianglesOgNumbers(rows) {
    for (let i = 1; i <= rows; i++) {
        let columns = i;
        let print = '';
        for (let j = 1; j <= columns; j++) {
            print += `${columns} `;
        }
        console.log(print);
    }
}

trianglesOgNumbers(3);  // 1
                        // 2 2
                        // 3 3 3