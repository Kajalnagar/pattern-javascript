let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {

        if (
            i === 1 ||               // Top horizontal line
            i === 4 ||               // Middle horizontal line
            i === 7 ||               // Bottom horizontal line
            j === 1 && i < 4 ||      // Left vertical for top part
            j === 5 && i > 4         // Right vertical for bottom part
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
