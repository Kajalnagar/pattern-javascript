let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {

        if (
            j === 1 ||                          // Left vertical line
            (i === 1 && j < 5) ||               // Top line
            (i === 7 && j < 5) ||               // Bottom line
            (j === 5 && i > 1 && i < 7)         // Right vertical curve
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }
        
    }
    pattern += "\n";
}

console.log(pattern);
