/**
 * Contém a definição das rotas da aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 16/10/17
 */

 function itemOperations(ItemService) {

    const vm = this;

    vm.item = {};
    vm.itemFile = {};
    vm.categories = {};
    vm.types = {};

    vm.registerItem = function () {
        return ItemService.registerItem(vm.item, vm.itemFile);
    };

    vm.updateItem = function () {
        return ItemService.updateItem(vm.item);
    };

    vm.deleteItem = function () {
        return ItemService.deleteItem(vm.item);
    };

    vm.getAvailableCategories = function () {
        ItemService.getAvailableCategories()
        .then(function (response) {
            vm.categories = response.data;
        }).catch(function (errResponse) {
            console.log(errResponse.data);
        });
    };

    vm.getAvailableTypes = function () {
        ItemService.getAvailableTypes()
        .then(function (response) {
            vm.types = response.data;
        }).catch(function (errResponse) {
            console.log(errResponse.data);
        });
    };

    vm.getAvailableCategories();
    vm.getAvailableTypes();

 }

 itemOperations.$inject = ['ItemService'];

 angular
    .module('mybooks')
    .controller('ItemController', itemOperations);