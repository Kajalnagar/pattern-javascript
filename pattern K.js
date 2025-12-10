let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            j === 1 ||                   // Left vertical line
            i + j === 8 ||               // Right upper diagonal
            i === j + 3                   // Right lower diagonal
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
