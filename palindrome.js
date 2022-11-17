
function palindrome(str) {
    
    let lowerStr = str.toLowerCase(); // convert the given string to lower case.
    let cleanStr = lowerStr.replace(/[^0-9a-z]/gi, ''); // remove non-numeric values from the string
    let revStr = cleanStr.split("") //.reverse().join("");
    let match = Boolean;

    for (let i = 0; i < revStr.length; i--) {
        for (let j = 0; j < cleanStr.length; j++) {
            if(revStr[i] === cleanStr[j]){
                match = true;
            } else{
                match = false
            }   
        }
        return match
    }

   // if (revStr === cleanStr) {
   //     match  = true
   // } else {
    //    match = false
    //}

   // return match;
  }
  
  console.log(palindrome("2_A3*3#a2"));