//Um loop inclui a condição teste, assim como o bloco (tipicamente um { .. }). A cada vez que o bloco de loop é executado, damos o nome de iteração.

while (numOfCustomers > 0) {
	console.log( "Como posso ajudar?" );

	// Ajude o consumidor...

	numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
	console.log( "Como posso ajudar?" );

	// Ajude o consumidor...

	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

//A única diferença prática entre esses dois loops é como a condicional é executada, se antes da primeira iteração (while) ou após a primeira iteração (do..while).
//De qualquer forma, se o teste da condicional retorna falso (false), a próxima iteração não irá rodar. 
//Se a condição inicial for false, um loop while nunca irá rodar, mas um loop do..while irá rodar apenas a primeira vez.


//A condicional é testada em cada iteração, mesmo se existir uma condicional if dentro do loop.

for (var i = 0; i <= 9; i++) {
	console.log(i);
}

//Como você pôde ver, nos dois casos a condicional i <= 9 foi verdadeira(true) para as 10 primeiras iterações (i para os valores de 0 até 9) em ambas as formas do loop, mas se torna falsa(false) uma vez que o valor de i chega a 10.