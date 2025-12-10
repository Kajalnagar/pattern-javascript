let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            i === 1 ||            // Top horizontal line
            i === 7 ||            // Bottom horizontal line
            i + j === 8            // Diagonal from top-right to bottom-left
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
