/**
 * Responsável por interceptar todas as requisições e inserir 
 * os headers e o token necessário para o processo
 * de autenticação na aplicação;
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function authenticationInterceptor(TokenHandler, $location, $q, __env) {

    return {
        request: request,
        responseError: responseError
    };

    function request(config) {
        config.headers = config.headers || {};

        if (config.url.includes(__env.apiUrl.signin)) {

            config.headers[__env.authentication.loginReqHeader] = __env.authentication.loginReqHeaderValue;

        } else {

            const token = TokenHandler.getToken();
            
            if(token) {
                config.headers[__env.authentication.tokenHeader] = __env.authentication.tokenPrefix + token;
            }
        }
        return config;
    }

    function responseError(response) {
        if (response.status === 401 || response.status === 403) {
            $location.path(__env.uiRote.signin);
        }
        return $q.reject(response);
    }

 }

 authenticationInterceptor.$inject = ['TokenHandler', '$location', '$q', '__env'];

 angular
    .module('mybooks')
    .factory('AuthenticationInterceptor', authenticationInterceptor)
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('AuthenticationInterceptor');
    }]);