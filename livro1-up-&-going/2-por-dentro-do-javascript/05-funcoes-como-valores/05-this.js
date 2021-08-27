// Se uma função tiver uma referência ao this dentro dela, esse this geralmente aponta para um object. 
// Mas qual objeto que this aponta irá depender de como a função é chamada.
// É importante entender que this não se refere à função propriamente dita.

function foo() {
   console.log(this.bar)
}

var bar = "global"

var obj1 = {
   bar: "obj1",
   foo: foo
}

var obj2 = {
   bar: "obj2"
}

// --------

foo()              // "global"
obj1.foo()         // "obj1"
foo.call( obj2 )   // "obj2"
new foo()          // undefined