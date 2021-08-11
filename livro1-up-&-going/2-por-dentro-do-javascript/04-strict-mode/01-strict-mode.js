// Determina regras mais rígidas para certos comportamentos
// Se torna mais seguro e com padrões melhor definidos
// Código melhor otimizado pelo Motor
'use strict'

function foo() {
   // este código está em modo estrito

   function bar() {
      // este código está em modo estrito
   }
}

// este código está em modo estrito


// A diferença chave de melhoria é desabilitar a variável auto-global implícita ao omitir o var
a = 10
console.log(a)