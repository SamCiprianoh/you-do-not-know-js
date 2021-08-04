//JavaScript tem valores tipados, não variáveis tipadas. Os seguintes tipos nativos estão disponíveis:
//string
//number
//boolean
//null e undefined
//object
//symbol (novidade do ES6)



//O JavaScript dispõe de um operador typeof que pode examinar um valor e dizer a você qual é o tipo informado:

var a;
typeof a;               // "undefined"

a = "hello world";
typeof a;               // "string"

a = 42;
typeof a;               // "number"

a = true;
typeof a;               // "boolean"

a = null;
typeof a;               // "object" -- weird, bug

a = undefined;
typeof a;               // "undefined"

a = { b: "c" };
typeof a;               // "object"

// Apenas valores possuem tipos em Js, variáveis são apenas containers para esses valores