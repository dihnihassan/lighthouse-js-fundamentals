function howManyHundreds(){ 

let amount = ""; 

amount = amount %= 100 

return  Math.floor(amount / 100); 

} 

{
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


}
