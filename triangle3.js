function printPattern() {
  const rows = 7;
  const cols = 3;
  let pattern = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (j === 1 || j === cols) {
        pattern += "*";
      } else {
       
        if (i === 1 || i === rows) {
          pattern += " ";
        } else {
          pattern += "*";
        }
      }
    }
    pattern += "\n";
  }

  console.log(pattern);
}

printPattern();
