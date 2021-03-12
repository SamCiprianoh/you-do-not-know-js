const ACCESSORY_PRICE = 9.99

var bank_balance = 302.13
var amount = 99.99

if(amount < bank_balance){
   console.log('Quero comprar esse celular!')
}
//A condicional if requer uma expressão entre parênteses ( ) que pode ser definida como verdadeira (true) ou falsa (false).
//Se a condicional if esperar um tipo boolean, mas o argumento que você passou for de algum tipo que não seja boolean, uma coerção irá acontecer.

amount = amount * 4

if(amount < bank_balance){
   console.log('Vou levar esse acessório')
   amount = amount + ACCESSORY_PRICE
} else {
   console.log('Não, obrigado.')
}
//Você pode até mesmo definir uma alternativa para se a condição não for verdadeira, uma cláusula chamada else