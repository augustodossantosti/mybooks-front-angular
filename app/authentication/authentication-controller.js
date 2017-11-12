/**
 * Contém a definição das operações relacionadas
 * ao processo de autenticação.
 * 
 * @author Augusto Santos
 * @version 1.0 24/05/17
 */

 function authenticationController(AuthenticationService) {
    
    const vm = this;

    vm.user = {};

    vm.signin = function () {
        AuthenticationService.signin(vm.user);
    }

    vm.logout = function () {
        AuthenticationService.logout();
    }

    vm.isAuthenticated = function () {
        return AuthenticationService.isAuthenticated();
    }
 }

 authenticationController.$inject = ['AuthenticationService'];

 angular
    .module('mybooks')
    .controller('AuthenticationController', authenticationController);