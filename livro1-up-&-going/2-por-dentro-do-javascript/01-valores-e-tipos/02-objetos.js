// O tipo 'object' se refere a um valor composto onde vc pode definir propriedades (lugares nomeados prontos para armazenar informação) que podem armazenar seus própios valores de qualquer tipo.

var obj = {
   a: 'hello world',
   b: 42,
   c: true
}

obj.a // 'hello world'
obj.b // 42
obj.c // true

obj['a'] // 'hello world'
obj['b'] // 42
obj['c'] // true

// Podemos acessar as propriedades de duas formas, usando dot notation (ex: obj.a) ou notação em colchetes (ex: obj['a'])
// A notação em colchetes é últil caso você tenha um nome de propriedade que contenha caracteres especiais (ex: obj['hello world])
// Esses tipos de propriedades são referenciadas com chaves (keys) quando acessadas por notação em colchetes
// Notação em colchetes também é últil quando se quer acessar uma propriedade/chave onde o nome é armazenado dentro de outra variável
var b = 'a'

obj[b] // 'hello world'
obj['b'] // 42