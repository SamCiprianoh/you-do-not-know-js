const TAXA_IMPOSTO = 0.08
const PRECO_CELL = 99.99
const PRECO_ACESSORIO = 9.99
const LIMITE_GASTOS = 200

var saldo_bancario = 303.91
var compra = 0

function taxa(valor){
   valor = valor + valor * TAXA_IMPOSTO
   return valor
}

function format(valor){
   return "$" + valor.toFixed(2)
}


while(compra < saldo_bancario){
   compra = compra + PRECO_CELL

   if(compra < LIMITE_GASTOS){
      compra = compra + PRECO_ACESSORIO
   }
}

compra = taxa(compra)

console.log('Sua compra: ' + format(compra))

if(compra > saldo_bancario){
   console.log('Você não pode pagar a conta.')
}



