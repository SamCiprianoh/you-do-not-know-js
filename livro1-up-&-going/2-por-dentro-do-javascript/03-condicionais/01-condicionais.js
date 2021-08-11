// Instrução condicional if
if (a == 2) {
   // faça alguma coisa
}
else if (a == 10) {
   // faça outra coisa
}
else if (a == 42) {
   // faça outra coisa diferente
}
else { 
   // resultado se nenhuma instrução for atendida (fallback - escolhida automaticamente quando a principal não está presente)
}

// Essa estrutura é verbosa porque precisa especificar um teste para a em cada um dos casos


// Instrução condicional switch
switch (a) {
   case 2:
      // faça alguma coisa
      break
   case 10:
      // faça outra coisa
      break
   case 42:
      // faça outra coisa diferente
      break
   default:
      // resultado se nenhuma instrução for atendida (fallback)
}

// O break é importante se quisermos que apenas uma instrução seja executada
// Se omitir o break de um case, e esse case for aceito ou rodar, a execução irá continuar pelos próximos cases (fall trough)

// Outra forma de condicional é o 'operador ternário' 
// É uma forma concisa/simplificada de uma instrução if..else
var a = 42
var b = (a > 41) ? 'hello' : 'world'

// similar a
if (a > 41) {
   b = 'hello'
}
else {
   b = 'world'
}
