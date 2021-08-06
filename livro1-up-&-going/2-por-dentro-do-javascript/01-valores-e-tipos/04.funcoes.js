// Funções são subtipo de objects
function foo() {
   return 42
}

foo.bar = 'hello world'

console.log(typeof foo)     // function
console.log(typeof foo())   // 'number'
console.log(typeof foo.bar) // 'string'

// O typeof retorna "function", que indica que function é um tipo padrão -- e por isso pode ter propriedades. Entretanto, é provável que você use as propriedades do objeto de function (como foo.bar) apenas em alguns casos.