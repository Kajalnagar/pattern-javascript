let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {

        if (
            j === 1 ||                 // Left vertical line
            i === 1 ||                 // Top horizontal line
            i === 4 && j < 5 ||        // Middle horizontal line
            j === 5 && i > 1 && i < 4 || // Right vertical of top loop
            i - j === 3                  // Diagonal leg
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
