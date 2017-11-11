/**
 * Contém a definição do módulo principal da aplicação
 * e suas dependências.
 * 
 * @author Augusto Santos
 * @version 1.0 24/05/17
 */

angular
    .module('mybooks', ['ngStorage', 'ngRoute'])

    .constant('__env', {
        apiUrl: {
            baseUrl: 'http://localhost:8081/mybooks',
            signin: 'http://localhost:8081/mybooks/login',
            signup: 'http://localhost:8081/mybooks/signup'
        },

        uiRote: {
            home: '/',
            signin: '/signin',
            signup: '/signup'
        },

        authentication : {
            loginReqHeader: 'X-Requested-With',
            loginReqHeaderValue: 'XMLHttpRequest',
            tokenHeader: 'Authorization',
            tokenPrefix: 'Bearer '
        }
    });
