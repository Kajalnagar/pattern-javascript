/*
1
12
123
1234
*/
let n = 4;

for (let row = 1; row <= n; row++) {
    let str = "";

    for (let col = 1; col <= row; col++) {
        str += col;   // print integers
    }

    console.log(str);
}
