// Uma array é um 'object' que armazena valores (qualquer tipo), não necessariamente em propriedades ou chaves nomeadas, mas em posições enumeradas
var arr = ['hello world', 42, true]

arr[0] // 'hello world'
arr[1] // 42
arr[2] // true
arr.length // 3

typeof arr // 'object'

// Visto que arrays são objetos especiais, elas também podem conter propriedades como 'length' 
// Em teoria vc pode usar uma array como um objeto normal com suas próprias propriedades nomeadas, ou pode usar um object e apenas determinar propriedades numéricas (0, 1, etc.) de maneira similar a uma array. Entretanto isso é considerada uma maneira indevida de utilizar seus respctivos tipos.

