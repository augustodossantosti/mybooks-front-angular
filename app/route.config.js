/**
 * Contém a definição das rotas da aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function routeProvider($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/shelf/shelf-list.html',
        controller: 'ShelfController',
        controllerAs: 'shelfCtrl'
    })
    .when('/signin', {
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
        {redirectTo: __env.uiRoute.home}
    );
 }

 routeProvider.$inject = ['$routeProvider'];

 angular
    .module('mybooks')
    .config(routeProvider);