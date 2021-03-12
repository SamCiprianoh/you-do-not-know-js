//Uma função geralmente é um bloco de código nomeado, de forma que ele possa ser "chamado" pelo nome, fazendo o código dentro dele ser acionado sempre que preciso

/*function printAmount() {
	console.log(amount.toFixed(2));
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"*/

//Funções podem, opcionalmente, carregar argumentos (conhecidos também como parâmetros) -- valores que você designa a ela. 
//E eles podem, também opcionalmente, retornar um outro valor.

function printAmount(amt) {
	console.log(amt.toFixed(2));
}

function formatAmount() {
	return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);		// "199.98"

amount = formatAmount();
console.log(amount);			// "$99.99"

//Funções são geralmente usadas para códigos que você planeja chamar diversas vezes, 
//mas eles podem ser úteis também para organizar códigos relacionados em coleções que você possa nomear, mesmo que você só planeja chamá-los apenas uma vez.


const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
	// calcula o novo amount adicionando a tax
	amt = amt + amt * TAX_RATE

	// retorne o novo amount
	return amt;
}

var amount = 99.99

amount = calculateFinalPurchaseAmount(amount)

console.log(amount.toFixed(2))