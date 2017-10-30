/**
 * MyBooks - Gerenciamento de coleções de itens de leitura.
 * 
 * Contem a definição da diretiva do menu de navegação lateral.
 * 
 * @author Augusto Santos
 * @version 1.0 17/10/2017
 */

function sideMenu() {

    return {
        restrict: 'E',
        controller: 'AuthenticationController',
        controllerAs: 'authCtrl',
        templateUrl: 'app/directives/side-menu/side-menu.html'
    };

}

angular
    .module('mybooks')
    .directive('sideMenu', [sideMenu])