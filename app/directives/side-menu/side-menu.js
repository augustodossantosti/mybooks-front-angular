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
        templateUrl: 'app/directives/side-menu/side-menu.html',
        restrict: 'E'
    };

}

angular
    .module('mybooks')
    .directive('sideMenu', [sideMenu])