const TAX_RATE = 0.08
const CELL_PRICE = 99.99
const ACESSORY_PRICE = 9.99
const SPENDING_LIMIT = 200

var bankBalance = 303.91
var purchase = 0

function tax(amount){
   amount = amount + amount * TAX_RATE
   return amount
}

function format(amount){
   return "$" + amount.toFixed(2)
}


while(purchase < bankBalance){
   purchase = purchase + CELL_PRICE

   if(purchase < SPENDING_LIMIT){
      purchase = purchase + ACESSORY_PRICE
   }
}

purchase = tax(purchase)

console.log('Sua compra: ' + format(purchase))

if(purchase > bankBalance){
   console.log('Você não pode pagar a conta.')
}



