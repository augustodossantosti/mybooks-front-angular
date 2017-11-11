/**
 * Contém a definição das rotas da aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function routeProvider($routeProvider, __env) {

    $routeProvider.when(__env.uiRote.home, {
        templateUrl: 'app/shelf/shelf-list.html',
        controller: 'ShelfController',
        controllerAs: 'shelfCtrl'
    })
    .when(__env.uiRote.signin, {
        templateUrl: 'app/authentication/signin-template.html',
        controller: 'AuthenticationController',
        controllerAs: 'authCtrl'
    })
    .when('/add-item', {
        templateUrl: 'app/item/register-item.html',
        controller: 'ItemController',
        controllerAs: 'itemCtrl'
    })
    .otherwise(
        {redirectTo: '/'}
    );
 }

 routeProvider.$inject = ['$routeProvider', '__env'];

 angular
    .module('mybooks')
    .config(routeProvider);