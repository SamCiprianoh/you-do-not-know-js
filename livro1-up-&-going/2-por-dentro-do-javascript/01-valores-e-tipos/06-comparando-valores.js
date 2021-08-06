// O resultado de qualquer comparação é estritamente um valor boolean (true ou false). independente do tipo de valor comparado
// Existe dois principais tipos de comparação: igualdade e desigualdade

// === COERÇÃO === //
// Funciona de duas formas, explicita e implicita


// Coerção explícita
var a =  '42'

var b = Number(a) // '42' explicitamente coagido para 42 aqui

a // '42'   -- string
b // 42     -- number



// Coerção implícita
var c = '42'
var d = c * 1 // '42' implicitamente coagido para 42 aqui

c // '42'
d // 42