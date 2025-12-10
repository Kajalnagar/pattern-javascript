let n = 5;

for (let i = n; i >= 1; i--) {  // i DECREASES (5 → 1)
    let row = "";
    for (let j = 1; j <= i; j++) {  // j INCREASES (1 → i)
        row += "*";
    }
    console.log(row);
}
