let arr = [-2, -1, 0];
function incrementArray(arr) {
  //your code here
	let a = [];
	for (let i = 0; i < arr.length; i++) {
		a.push(++arr[i]);
	}
	return a;
}

alert(incrementArray(arr));
