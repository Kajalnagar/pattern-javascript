let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = i; j < n; j++) row += " ";  // leading spaces

    // left star
    row += "*";

    // middle part
    if (i == 3) {
        // middle full line
        for (let k = 1; k < i; k++) row += "*";
    } else {
        // hollow space
        for (let k = 1; k < i; k++) row += " ";
    }

    // right star (except first row)
    if (i > 1) row += "*";

    console.log(row);
}
