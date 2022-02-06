module.exports = function toReadable (number) {
	let a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];  
	let numberTen = (number - ((Math.floor(number / 100)) * 100));

	if (number == 0) {
		return ('zero');
	} else if (number < 10) {
	  	return (a[number - 1]);
	} else if (number >= 10 && number < 20) {
		return (b[number - 10]);
	} else if (number >= 20 && number < 100 && number % 10 === 0) {
		return (c[number / 10 - 2]);
	} else if (number >= 20 && number < 100) {
		let arrN = number.toString().split('');
		return (c[+(arrN[0]-2)] + ' ' + a[+(arrN[1]-1)]);
	} else if (number % 100 === 0 && number < 1000) {
		return (a[number / 100 - 1] + ' hundred' )
	} else if (numberTen > 0 && numberTen < 10 ) {
		return (a[Math.floor(number / 100 - 1)] + ' hundred' + ' ' + a[numberTen - 1]);
	} else if (numberTen >= 10 && numberTen < 20 ) {
		return (a[Math.floor(number / 100 - 1)] + ' hundred' + ' ' + b[numberTen - 10]);
	} else if (number % 10 === 0 && number < 1000) {
		return (a[Math.floor(number / 100 - 1)] + ' hundred' + ' ' + c[numberTen / 10 - 2]);
	} else {
		let arrNTen = numberTen.toString().split('');
		return (a[Math.floor(number / 100 - 1)] + ' hundred' + ' ' + c[+(arrNTen[0]-2)] + ' ' + a[+(arrNTen[1]-1)]);
	}
}
