//Escopo (tecnicamente chamado escopo léxico) 
//Em JavaScript, cada função tem seu próprio escopo. O escopo é basicamente uma coleção de variáveis e regras de como essas variáveis serão acessadas pelo nome.
//Apenas o código dentro dessa função poderá acessar as variáveis dentro daquele escopo.

//O nome de uma variável precisa ser único dentro do escopo -- não podem haver duas variáveis diferentes com o nome a no mesmo escopo. 
//Porém duas variáveis com o nome a em escopos diferentes podem coexistir sem problemas.
function one() {
	// essa variável `a` só pertence à função `one()`
	var a = 1;
	console.log(a);
}

function two() {
	// essa variável `a` só pertence à função `two()`
	var a = 2;
	console.log(a);
}

one();		// 1
two();		// 2


//Se um escopo está aninhado a outro, o código dentro do escopo interno pode acessar as variáveis do escopo mais externo.
function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// nós podemos acessar ambos `a` e `b` aqui
		console.log(a + b);	// 3
	}

	inner();

	// podemos acessar apenas `a` aqui
	console.log(a);			// 1
}

outer();
//As regras do escopo léxico dizem que o código dentro de um escopo pode acessar variáveis tanto dele mesmo quanto de qualquer escopo fora dele.