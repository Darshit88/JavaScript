var dp = [10, 20, 30, 40, 50];


var index = dp.indexOf(30);
document.write("Index of 30 is : " + index);

var shiftedElement = dp.shift();
document.write("<br>Removed element using shift : " + shiftedElement);

document.write("<br>Array after shift : " + dp);


var newLength = dp.unshift(5, 15);

document.write("<br>New length after unshift : " + newLength);


document.write("<br>Array after unshift : " + dp);


