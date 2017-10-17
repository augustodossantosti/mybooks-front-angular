/**
 * Contém a definição das operações sobre itens
 * gerenciáveis pela aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 15/10/17
 */

 function shelfService($http, __env) {

    return {
        getAllShelfs: getAllShelfs,
        registerShelf: registerShelf
    };

    function getAllShelfs() {
        return $http.get(__env.apiUrl.baseUrl + '/shelfs');
    }

    function registerShelf(category) {
        return $http.post(__env.apiUrl.baseUrl + '/shelfs?category=' + category);
    }

 }

 shelfService.$inject = ['$http', '__env'];

 angular
    .module('mybooks')
    .factory('ShelfService', shelfService);