var text = prompt("Enter text here:");
var char = prompt("Character to count");

function countBs(text){
  var counter = 0;
  for(var i = 0; i < text.length; i++){
    if(text.charAt(i) === 'B'){
      counter++;
    }
  }

  return counter;
};

console.log("Number of Bs on \'"+ text +"\' : " + countBs(text));

function countChar(text, char){
  var counter = 0;
  for(var i = 0; i < text.length; i++){
    if(text.charAt(i) === char){
      counter++;
    }
  }

  return counter;
};

console.log("Number of "+ char + " on \'"+ text +"\' :" + countChar(text, char));
