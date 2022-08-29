// Discount In the product

//Discount = (listingprice - sellingprice)/listingprice * 100


var sellingPrice = 199;
var listingPrice = 799;
var d = ((listingPrice - sellingPrice)/(listingPrice))*100;
console.log(Math.round(d) + "% OFF");


