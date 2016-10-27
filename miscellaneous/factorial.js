function factorial(n){
	if(n < 0){
		return "enter + number"; 
	}else if(n === 0){
		return 1;
	}else{
		return n * factorial(n-1);
	}
};

var f = prompt("Enter a number for factorial:");
console.log(factorial(f));




/*
 *
 *Code below works but don't filter negative and zero values.
 *It is poorly made and recursion is not utilized well.
 *
*/

/*function factorial(n){	
	while(n !== 0){
		 return n * factorial(n-1);
	}
	return 1;
};

console.log(factorial(5));*/


