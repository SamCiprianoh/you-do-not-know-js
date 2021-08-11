// Podemos pensar que uma clausura (closure) é uma forma de 'lembrar' e continuar acessando o escopo de uma função (e suas variáveis) mesmo se a função já estiver terminado de rodar

// Considere
function makeAdder(x) {
   // parâmetro x é uma variável interna

   // função interna 'add()' usa 'x', então
   // ele tem uma 'clausura (closure)' que o envolve
   function add(y) {
      return y + x
   }

   return add
}

// A referência para a função interna add(..), que faz um retorno com cada chamada para sua função externa makeAdder(..) é apta a se lembrar sempre que o valor x for passado para makeAdder(..).

// 'plusOne' pega a referência para a função interna add(..) função com closure sobre o parâmetro 'x' da função externa 'makeAdder(..)
var plusOne = makeAdder(1)

// 'plusTen' pega a referência para a função interna add(..) função com closure sobre o parâmetro 'x' da função externa 'makeAdder(..)
var plusTen = makeAdder(10)




function makeAdder(x) {

   function add(y) { // closure
      return y + x
   }

   return add
}

var plusOne = makeAdder(1)    // Retorna a referência da função add(..) que se lembra de x como 1 
var plusTen = makeAdder(10)   // Retorna a referência da função add(..) que se lembra de x como 10 

console.log(plusOne(3))    // plusOne agora está referenciando a função add(..) -- passando o valor de 3 para y -- retornando y + x
                           // 4

console.log(plusTen(13))   // plusOne agora está referenciando a função add(..) -- passando o valor de 13 para y -- retornando y + x
                           // 23
