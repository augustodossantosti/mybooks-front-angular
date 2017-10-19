/**
 * Contém a definição das rotas da aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function itemService($http, __env) {

    return {
        registerItem: registerItem,
        updateItem: updateItem,
        deleteItem: deleteItem,
        getAvailableCategories: getAvailableCategories,
        getAvailableTypes: getAvailableTypes
    };

    function registerItem(item, file) {
        const conf = {
            url: __env.apiUrl.baseUrl + '/items',
            method: 'POST',
            headers: {'Content-Type' : undefined},
            transformRequest: function (data) {
                const formData = new FormData();
                formData.append('item', new Blob([JSON.stringify(data.item)], {
                    type: 'application/json'
                }));
                formData.append("file", data.file);
                return formData;
            },
            data: { item: item, file: file}
        };
        return $http(conf);
    }

    function updateItem(item) {
        return $http.put('', item)
    }

    function deleteItem(itemId) {
        return $http.delete('', itemId);
    }

    function getAvailableCategories() {
        return $http.get(__env.apiUrl.baseUrl + '/items/categories');
    };
        
    function getAvailableTypes() {
        return $http.get(__env.apiUrl.baseUrl + '/items/types');
    };

 }

 itemService.$inject = ['$http', '__env'];

 angular
    .module('mybooks')
    .factory('ItemService', itemService);