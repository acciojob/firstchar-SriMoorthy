function firstChar(text) {
  // your code here
	let T = text.trim()
	if(T == ' ' && T == ''){
		return ('')
	}
	else{
		return T[0]
	}
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
