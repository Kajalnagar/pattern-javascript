let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 6; j++) {

        if (
            (i === 1 && j > 1 && j < 6) ||          // Top horizontal
            (i === 7 && j > 1 && j < 6) ||          // Bottom horizontal
            (j === 1 && i > 1 && i < 7) ||          // Left vertical
            (i === 4 && j >= 3 && j < 6) ||         // Middle inner bar
            (j === 6 && i >= 4 && i < 7)            // Right vertical lower
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
