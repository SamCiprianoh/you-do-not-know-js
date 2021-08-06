// Existe 4 operadores de igualdade ==, ===, != e !==

// A forma correta de caracteriza-los é que
// == Verifica por igualdade com coerção autorizada
// === Verifica a igualdade do valor sem autorizar a coerção


// Veja a coerção implícita que é autorizada pelo comparador == e não permitido com ===
var a = '42'
var b = 42

a == b   // true
a === b  // false  


// Na comparação a == b, o JS percebe que os tipos não combinam, então ele segue uma sequência de etapas para coagir um ou ambos os valores para um tipo diferente até que os tipos combinem, de forma que um valor de igualdade simples possa ser considerado.

//A igualdade a === b produz um resultado false, porque a coerção não é permitida, assim obviamente a comparação falha.


// Regras Simples 
// - Se em um dos lados da comparação você puder ter um valor true ou false, evite == e use ===.
// - Se em um dos lados da comparação você puder ter esses valores específicos (0, "", ou []), evite == e use ===.
// - Em todos os outros casos, você estará seguro usando ==. Não apenas é mais seguro, mas em muitos casos simplifica seu código de forma a melhorar sua leitura.


// Atenção sobre as regras de comparação de == e === se você estiver comparando dois valores não-primitivos, como objects (incluíndo function e array)
// Estes valores são regidos por suas referências, ambas as comparações == e === irão apenas verificar se suas referências são compatíveis, e não irá comparar nada sobre seus valores subjacentes.

// Exemplo
var c = [1, 2, 3]
var d = [1, 2, 3]
var e = "1,2,3"

c == e   // true
d == e   // true
c == d   // false

// Arrays são por padrão convertidas para strings por simplesmente se juntarem todos os valores com vírgulas (,) entre elas. Você pode pensar que duas arrays com o mesmo conteúdo são iguais ==, quando na verdade não são
