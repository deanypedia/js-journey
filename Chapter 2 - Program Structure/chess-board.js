var size = prompt("Enter size:");

for(var y = 0; y < size; y++){
  var output = "";

  if(y%2===0){
    for(var x = 0; x < size; x++){
        if(x%2 === 0){
          output += " ";
        }else{
          output+="#";
        }
    }

    console.log(output);
  }else {
    for(var x = 0; x < size; x++){

        if(x%2 === 1){
          output += " ";
        }else{
          output+="#";
        }
    }

    console.log(output);
  }
}
