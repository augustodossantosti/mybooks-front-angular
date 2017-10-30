/**
 * Contém a definição das operações sobre itens
 * gerenciáveis pela aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 15/10/17
 */

 function shelfService($http, __env) {

    return {
        registerShelf: registerShelf,
        deleteShelf: deleteShelf,
        getAllShelfs: getAllShelfs
    };

    function registerShelf(category) {
        return $http.post(__env.apiUrl.baseUrl + '/shelfs?category=' + category);
    }

    function deleteShelf(category) {
        return $http({
            url: __env.apiUrl.baseUrl + '/shelfs',
            method: 'DELETE',
            params: {category: category}
        });
    }

    function getAllShelfs() {
        return $http.get(__env.apiUrl.baseUrl + '/shelfs');
    }

 }

 shelfService.$inject = ['$http', '__env'];

 angular
    .module('mybooks')
    .factory('ShelfService', shelfService);