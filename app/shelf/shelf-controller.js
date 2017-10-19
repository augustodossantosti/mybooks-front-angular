/**
 * Contém a definição das operações sobre itens
 * gerenciáveis pela aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 24/05/17
 */

function shelfOperations(ShelfService) {

    const vm = this;

    vm.shelfs = [];

    vm.registerShelf = function () {
        ShelfService.registerShelf()
        .then(function (response) {
            
        }).catch(function (errResponse) {
            
        })
    };

    vm.getAllShelfs = function () {
        ShelfService.getAllShelfs()
        .then(function (response) {
            vm.shelfs = response.data;
        }).catch(function (errResponse) {
            console.log(errResponse.data);
        });
    };

    vm.deleteShelf = function () {
        ShelfService.deleteShelf()
        .then(function (response) {
            
        }).catch(function (errResponse) {
            
        })
    };

}

shelfOperations.$inject = ['ShelfService'];

angular
    .module('mybooks')
    .controller('ShelfController', shelfOperations);