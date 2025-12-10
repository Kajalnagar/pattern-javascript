let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            j === 1 ||                 // Left vertical line
            j === 7 ||                 // Right vertical line
            i === j && i <= 4 ||       // Left diagonal
            i + j === 8 && i <= 4      // Right diagonal
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
