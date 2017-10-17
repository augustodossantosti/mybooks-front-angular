/**
 * Contém a definição do serviço responsável pelo
 * processo de autenticação na aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function authenticationService($http, $location, TokenHandler, __env) {

    return {
        signin: signin,
        logout: logout
    };

    function signin(data) {
        $http.post(__env.apiUrl.signin, data)
        .then(function (response) {
            TokenHandler.extractToken(response);
            $location.path(__env.uiRoute.home);
        }).catch(function (errResponse) {
            console.log(errResponse.data);
        })
    }

    function logout() {
        TokenHandler.deleteToken();
        $location.path(__env.uiRoute.signin);
    }

 }

 authenticationService.$inject = ['$http', '$location', 'TokenHandler', '__env'];

 angular
    .module('mybooks')
    .factory('AuthenticationService', authenticationService);