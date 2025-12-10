let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            j === 1 ||                 // Left vertical
            j === 7 ||                 // Right vertical
            (i >= 4 && j === i - 1) || // Left inner diagonal
            (i >= 4 && j === 8 - i)    // Right inner diagonal
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
