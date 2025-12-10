let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            i === j ||             // Left-top to right-bottom diagonal
            i + j === 8            // Right-top to left-bottom diagonal
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
