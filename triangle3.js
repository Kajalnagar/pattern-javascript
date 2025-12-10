/*
*   *
****
****
****
*  *
*/


function printPattern() {
  const rows = 5;
  const cols = 3;
  let pattern = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {

      if (j === 1 || j === cols) {
        pattern += "*";     // left & right border
      } else {
        if (i === 1 || i === rows) {
          pattern += " ";   // top & bottom hollow
        } else {
          pattern += "*";   // middle solid
        }
      }
    }
    pattern += "\n";        // new line after each row
  }

  console.log(pattern);     // print final pattern once
}

printPattern();


  console.log(pattern);
}

printPattern();
