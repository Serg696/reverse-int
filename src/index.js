module.exports = function reverse (n) {
	let num = String(n).split('');
    	let znak;
    	if (num[0] === "-"){
      		znak = num[0];
      		num = num.slice(1);
      		//console.log("Minus" + znak);
    	}
    	//num = znak ? znak + num.reverse().join('') : num.reverse().join('');
	num = num.reverse().join('');
	return Number(num)
}
