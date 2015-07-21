
 /*
Lucas Alencar
Section 00 
7-21-2015


 */

//alert("Test It");

 //Create a loop that will write out the lyrics for the 99 bottles of beer song.

 //for(initialization; condition; increment of change){}
 for(var i=99; i>0; i--){
    //Verify that the loop works
    //console.log(i);


  if(i===2) {
  console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. You take one down and pass it around. "+(i-1)+" bottle of beer on the wall");
 } else if(i===1){
   console.log(i+" bottle of beer on the wall. "+i+" bottle of beer. You take one down and pass it around. No more bottles of beer on the wall\nThe ende.");

  } else{
   console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. You take one down and pass it around. "+(i-1)+" bottles of beer on the wall");
  }
 }