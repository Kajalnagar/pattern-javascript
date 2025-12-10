let n = 7; // Height of the letter B

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
        // Logic 
        if (
            j === 0 ||                     // Left vertical line
            (i === 0 && j < n - 1) ||      // Top horizontal line
            (i === Math.floor(n / 2) && j < n - 1) || // Middle horizontal line
            (i === n - 1 && j < n - 1) ||  // Bottom horizontal line
            (j === n - 1 && i !== 0 && i !== Math.floor(n / 2) && i !== n - 1) // Right vertical line (middle)
        ) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
