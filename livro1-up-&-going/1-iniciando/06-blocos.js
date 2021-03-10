//Em JavaScript, um bloco é definido por englobar uma ou mais instruções dentro de um par de chaves { .. }
var amount = 99.99;


if (amount > 10) {			// <-- bloco anexado ao `if` -- as instruções dentro do bloco só irão ser processadas se a condicional for aceita.
	amount = amount * 2;
	console.log( amount );	
}