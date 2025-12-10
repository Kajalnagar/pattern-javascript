let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            i === 1 ||          // Top horizontal line
            j === 4             // Middle vertical line
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
