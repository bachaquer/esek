function bake(sake, mult){
	return sake*mult;
}

function multik(num){
	var wow = function tamam(x){
		return bake(x, num); 
	};
	return wow;
}
var dvadcatka=multik(20);
console.log(dvadcatka(5));	