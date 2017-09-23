const mathOper = function(val1, val2, val3, val4, val5) {
	return val1 * val2 + val3 - val4 / val5;   
};

const myFavourPaint = function() {
	return 'Van Gog';
};

const printAddress = function(distinct, street, zip_code) {
	console.log(distinct + ' ' + street + ' ' + zip_code);
};

//printAddress(2, Petrosyan, 0056);

const fullName = function(fName, lName) {
	return fName + ' ' + lName;
};

const longestWord = function(str1, str2, str3) {
	if (str1.length >= str2.length && str1.length >= str3.length) {
		return str1;
	} else if (str2.length >= str1.length && str2.length >= str3.length) {
		return str2;
	} else if (str3.length >= str1.length && str3.length >= str2.length) {
		return str3;
    }
};

const myFunc = function(num1, num2) {
	if (num1 === num2) {
		return 0;
	} else if (num1 > num2){
		return 1;
	} else if (num1 < num2){
		return -1
	} 
};

const firstTruethy = function(val1, val2, val3) {
	return val1 || val2 || val3;
};

//firstTruethy(0, false, 15); // returns 15

