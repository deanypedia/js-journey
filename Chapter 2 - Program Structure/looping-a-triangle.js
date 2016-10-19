var height = prompt("Enter height:");

for(var y = 1; y <= height; y++){

  var numSharp = "";
  
   for(var x = 0; x < y; x++){
     numSharp += "#";
   }

   console.log(numSharp);
}
