/*
     *
   **** 
   ****
   ****
    *
*/
function pattern2(){
const rows = 5;
  const cols = 4;
  let pattern = "";// for left 1st pattern empty and place it in 2nd number
  for (let i = 1; i<=rows; i++ ){
    for(let j = 1; j<=cols;j++){
      // left and right boader
      (j===2||i===rows){
        pattern +="*";
      }
      // top and bottom hollow
      else{
        if(i===1 || i ===rows){
          pattern +="";
        }
        else{
          // middle 
          pattern+="*";
        }
        pattern +="\n";
      }
      console.log(pattern);
    }
    printpattern();
  }
  
  
}
