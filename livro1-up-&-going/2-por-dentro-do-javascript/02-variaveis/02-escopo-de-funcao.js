// Usamos var para declarar a variável que irá referenciar o escopo da função corrente, ou escopo global se ela estiver no topo de tudo, fora de qualquer outro bloco

// === HOISTING === //
// Onde quer que var apareça dentro de um escopo, sua declaração é tomada como parte de todo o escopo e acessada em qualquer área dentro dele
// Metaforicamente esse comportamente é chamado de 'hoisting', quando uma declaração var é conceitualmente 'movida' para o topo do escopo

/*
var a = 2

foo() // funciona porque a declaração foo() é hoisted

function foo() {
   a = 3

   console.log(a) // 3

   var a // a declaração é hoisted para o topo de foo()
}

console.log(a) // 2
*/


// === ESCOPO ANINHADOS === //
// Quando declaramos uma variável, ela é disponibilizada em todos os lugares dentro do escopo, assim como dentro de qualquer escopo interno.
/*
function foo() {
   var a = 1

   function bar() {
      var b = 2

      function baz() {
         var c = 3

         console.log(a, b, c) // 1 2 3
      }

      baz()
      console.log(a, b) // 1 2
   }

   bar()
   console.log(a) // 1
}

foo()
*/

// note que c não está disponível dentro de bar(), porque está declarado dentro do escopo de baz(), e o b não está disponível para foo() pelo mesmo motivo


// Além de criarmos variáveis no mesmo nível da função, o ES6 deixa (let) criarmos variáveis que irão pertencer a blocos individuais (pares de {...}) usabdo a palavra chave let

function foo() {
   var a = 1

   if(a >= 1) {
      let b = 2

      while(b < 5) {
         let c = b * 2
         b++

         console.log(a + c)
      }
   }
}

foo()
// 5 7 9

// b irá pertencer apenas a instrução if e não para todo o escopo da função foo(). De maneira similar c pertence somente ao loop while.
// Escopamentos de bloco são muito úteis para controlar seus escopos de variáveis, usando uma maneira requintada, faz o código mais fácil de manter ao longo do tempo.