function isEven(n){
	if(n % 2 == 0){
		return true;		
	}else if (n % 2 == 1) {
		return false;
	}else if(n < 0){
		return isEven(-n);
	}else{
		return isEven(n-2)
	}
};


var input = prompt("Input a number to check if it is an even number:");

if(isEven(input)){
	console.log(input + " is an Even number.");
}else{
	console.log(input + " is an Odd number.");
}

