//O primeiro propósito das variáveis: gerenciar o estado do programa.
//Em outras palavras, estado é o acompanhamento das mudanças dos valores conforme seu programa está rodando.


//O JavaScript usa a tipagem dinâmica, o que significa que as variáveis podem armazenar valores de qualquer tipo.

//Declaramos uma variável usando a instrução var -- note que não existe aqui nenhuma informação sobre tipo nessa declaração

var amount = 99.99


amount = amount * 2

console.log( amount )	//Esse primeiro console.log() precisa IMPLICITAAMENTE converter o valor de number para string para poder imprimí-lo.



/*A instrução amount = "$" + String(amount) EXPLICITAMENTE converte o valor 199.98 para uma string e adiciona 
um caractere "$" no começo. Nesse ponto, amount agora armazena o valor em string de "$199.98",*/ 
amount = "$" + String(amount)

console.log(amount)		//então o segundo comando console.log() não precisa fazer nenhuma coerção para imprimir seu valor.



//Constante, quando você declara uma variável com um valor e deseja que o valor não mude ao longo do programa.
const a = 5

//Você declara essas constantes geralmente no início do programa, de forma a se tornar um lugar conveniente de se visitar caso deseje alterar algum valor. 
//Por convenção, variáveis definidas como constantes em JavaSscript são geralmente capitalizadas e separadas por um sublinhado.
const TAX_RATE = 0.08;//Forma de nomear a const por Convenção

