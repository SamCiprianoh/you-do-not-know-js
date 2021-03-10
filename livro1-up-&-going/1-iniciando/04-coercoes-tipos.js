//Se você tem um número(number) mas precisa imprimí-lo na tela, você precisará converter o valor para uma string, e em JavaScript isso é chamado de "coerção." 

/*De maneira similar, se alguém insere uma série de caracteres numéricos em um formulário de uma página, isso é uma string, 
se precisar usar esse valor para fazer operações matemáticas, você vai precisar converter para um número(number).*/




//COERÇÃO EXPLÍCITA
//Usando Number(..) (uma função nativa) como demonstrado, estamos realizando uma coerção explícita de qualquer outro tipo para o tipo number (número).
var a = "42";//String
var b = Number(a);//Number

console.log(a);// "42"
console.log(b);// 42





//COERÇÃO IMPLÍCITA
/*Quando comparada a string "99.99" com o número 99.99, você poderia dizer que eles são "igualdade nao-estrita" certo?
Para te ajudar nessas situações, o JavaScript irá, em alguns casos, implicitamente converter os valores para os tipos certos.*/

/*Sendo assim, se você usar o operador de igualdade não-estrita == para fazer uma comparação entre "99.99" == 99.99, 
o JavaScript vai converter o lado esquerdo "99.99" para seu número(number) equivalente 99.99. A comparação então se torna 99.99 == 99.99, que é claro, é verdadeira (true).*/