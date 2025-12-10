let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {

        if (
            (i === 1 && j > 1) ||      // Top line
            (i === 7 && j > 1) ||      // Bottom line
            (j === 1 && i > 1 && i < 7) // Left vertical line
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
