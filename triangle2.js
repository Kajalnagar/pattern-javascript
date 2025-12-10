/*
*****
****
***
**
*
*/




let n = 5;

for (let i = n; i >= 1; i--) {   
    let row = "";

    // spaces increase every row
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // stars decrease every row
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
