let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            (i <= 4 && i === j) ||        // Left upper diagonal
            (i <= 4 && i + j === 8) ||    // Right upper diagonal
            (i > 4 && j === 4)            // Vertical tail
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
