// A forma de uso mais comum de um clausura (closure) em JavaScript é o padrão módulo (module pattern)
// Módulos deixam você definir detalhes privados de implementação (variáveis, funções) que estarão escondidas do mundo externo
// Assim como uma API pública que é acessível de fora.

function user() {
   var username, password

   function doLogin(user, pw) {
      username = user
      password = pw

      // resto do trabalho do login...
   }

   var publicAPI = {
      login: doLogin
   }

   return publicAPI
}


// cria uma instancia do modulo 'user'
var fred = user()

fred.login('Fred', '123456')


