function foo() {
   // ..
}

// foo é basicamente apenas uma variável que referencia um escopo por onde é feita a referência para a função (function) que está sendo declarada
// Isso é a function por si só é um valor, assim como 42 ou [1,2,3]

// Podemos passar um valor (argumento) para a função, mas a função por conta própria pode ser um valor que pode ser designado a uma variável, ou, passado para ou retornado por, outras funções.

//Sendo assim o valor de uma função deve ser pensado como uma expressão, assim como qualquer outro valor ou expressão


// Considere
var foo = function() {
   // ..
};

var x = function bar(){
   // ..
};

// A primeira expressão da função designada a variável 'foo' é chamada de 'anônima' porque não tem nome.
// A segunda expressão da função é nomeada 'bar', mesmo que ela tenha sido referenciada para a variável x. 