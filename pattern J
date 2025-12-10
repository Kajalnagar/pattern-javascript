let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            i === 1 ||                // Top horizontal line
            j === 7 && i < 7 ||       // Right vertical line
            i === 7 && j > 1 && j < 6 ||  // Bottom curve
            j === 2 && i >= 5 && i < 7     // Left curve for bottom
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
