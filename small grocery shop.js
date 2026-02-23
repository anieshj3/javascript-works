var item1="cake"
var item2="Icecream"
var item3="Biscult"

var cakeprice=100
var Icecreamprice=60
var Biscultprice=25

var cakequality=4
var Icecreamquality=2
var Biscultquality=7

var caketotal=cakeprice*cakequality
var Icecreamtotal=Icecreamprice*Icecreamquality
var Bisculttotal=Biscultprice*Biscultquality

console.log(item1+"total:",caketotal)
console.log(item2+"total:",Icecreamtotal)
console.log(item3+"total:",Bisculttotal)

var totalbill=(caketotal+Icecreamtotal+Bisculttotal)
console.log("Total Bill:",totalbill)

// Change quantity of one item
cakequality=7
caketotal=cakeprice*cakequality
totalbill=(caketotal+Icecreamtotal+Bisculttotal)
console.log("Updated Total Bill:",totalbill)