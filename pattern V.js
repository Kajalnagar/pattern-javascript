let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            j === i && i <= 4 ||           // Left diagonal upper part
            j + i === 8 && i <= 4 ||       // Right diagonal upper part
            j === 8 - i && i > 4           // Left diagonal lower part
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
