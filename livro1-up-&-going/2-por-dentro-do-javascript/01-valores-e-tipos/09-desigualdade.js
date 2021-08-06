// os operadores <, >, <= e >= são usados para representar uma desigualdade
// Tipicamente são usados para comparar valores ordinários como number
// Porém também podemos comparar valores string, usando regras alfabéticas ('bar' == 'foo')

// A coerção segue regras similares á de igualdade, um fator importante é que não existe operador de 'desigualdade estrita' que possa desabilitar a coerção

var a = 41
var b = '42'
var c = '43'

console.log(a < b) // true
console.log(b < c) // true

// Em b < c a comparação é feita lexicograficamente (alfabeticamente, como um dicionário)
// Mas se ambos não forem string como em a < b, então ambos são coagidos para serem number

