var tshirtQuantity = 5;
var capQuantity = 3;

var tshirtPrice = 400;
var capPrice = 150;

var totalEarnings = (tshirtQuantity * tshirtPrice) + (capQuantity * capPrice);
console.log("Total Earnings:", totalEarnings);

tshirtPrice = 450;
totalEarnings = (tshirtQuantity * tshirtPrice) + (capQuantity * capPrice);
console.log("Updated Total Earnings:", totalEarnings);