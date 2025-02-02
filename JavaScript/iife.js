// global scope ke variablses ya pollution ko
// hatane ke lie hm IIFE  ka use krte h 
(function chai(){
    //named iifi
    console.log(`DB CONNECTED`);
})();            // ; to end the code line 


// 2 IIFI ak sath likhne ke lie beech me semicolon (;) hona jaroori h 


  ( (name)=>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
  })("neha")
