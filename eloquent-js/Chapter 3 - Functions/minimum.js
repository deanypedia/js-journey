var param1 = prompt("Enter first number:");
var param2 = prompt("Enter second number:");

console.log(minimum(param1,param2));


function minimum(param1, param2){
  if(param1 <= param2){
    return param1;
  }else{
    return param2;
  }
};
