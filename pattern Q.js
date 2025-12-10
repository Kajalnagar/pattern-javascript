let pattern = "";

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {

        if (
            (i === 1 && j > 1 && j < 7) ||       // Top horizontal
            (i === 7 && j > 1 && j < 7) ||       // Bottom horizontal
            (j === 1 && i > 1 && i < 7) ||       // Left vertical
            (j === 7 && i > 1 && i < 7) ||       // Right vertical
            (i === j && i > 4)                    // Tail diagonal
        ) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }
    pattern += "\n";
}

console.log(pattern);
