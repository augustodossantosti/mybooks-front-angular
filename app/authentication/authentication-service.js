/**
 * Contém a definição do serviço responsável pelo
 * processo de autenticação na aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function authenticationService($http, $location, TokenHandler, __env) {

    let user = undefined;

    return {
        signin: signin,
        logout: logout,
        isAuthenticated: isAuthenticated,
    };

    function signin(data) {
        $http.post(__env.apiUrl.signin, data)
        .then(function (response) {
            TokenHandler.extractToken(response);
            user = response.data;
            $location.path(__env.uiRoute.home);
        }).catch(function (errResponse) {
            console.log(errResponse.data);
        })
    }

    function logout() {
        TokenHandler.deleteToken();
        user = undefined;
        $location.path(__env.uiRoute.signin);
    }

    function isAuthenticated() {
        return typeof user !== 'undefined';
    }

 }

 authenticationService.$inject = ['$http', '$location', 'TokenHandler', '__env'];

 angular
    .module('mybooks')
    .factory('AuthenticationService', authenticationService);