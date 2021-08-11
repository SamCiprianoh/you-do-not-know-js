var foo = function() {
   // ..
};

var x = function bar(){
   // ..
};

// Essas expressões de função não estão sendo executadas -- poderíamos executá-las se incluíssemos foo() ou x()


// Existe uma outra forma de executar uma expressão de função
// Tipicamente chamada de Expressões de Função Invocadas Imediatamente (immediately invoked function expression, ou IIFE)
(function IIFE(){
   console.log( "Hello!" )
})()

// IIFE é apenas uma função, e funções criam escopo de variáveis, muitas vezes é usado para declarar variáveis que não afetaram o código fora da IIFE
var a = 42;

(function IIFE(){
    var a = 10;
    console.log( a );   // 10
})();

console.log( a );       // 42


// IIFEs também podem retornar valores
var x = (function IIFE(){
   return 42;
})();

console.log(x)