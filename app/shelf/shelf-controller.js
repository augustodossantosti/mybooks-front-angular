/**
 * Contém a definição das operações sobre itens
 * gerenciáveis pela aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 24/05/17
 */

function shelfOperations(ShelfService, ItemService) {

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

    vm.downloadItemFile = function (filePath) {

        ItemService.downloadItemFile(filePath)
        .then(function (response) {

            const headers = response.headers();
            const contentDisposition = headers['content-disposition'];
            const filename = getFileNameFromHeader(contentDisposition);
            const contentType = headers['content-type'];
            const linkElement = document.createElement('a');

            try {
                const blob = new Blob([response.data], {type: contentType});
                const url = window.URL.createObjectURL(blob);

                linkElement.setAttribute('href', url);
                linkElement.setAttribute('download', filename);

                var clickEvent = new MouseEvent("click", {
                    "view": window,
                    "bubbles": true,
                    "cancelable": false
                });
                linkElement.dispatchEvent(clickEvent);
            } catch (ex) {
                console.log(ex);
            }

        }).catch(function (errResponse) {
            console.log(errResponse.data);
        });
    }

    function getFileNameFromHeader(contentDispositionHeader) {
        var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    }

    function init() {
        vm.getAllShelfs();
    }

    init();

}

shelfOperations.$inject = ['ShelfService', 'ItemService'];

angular
    .module('mybooks')
    .controller('ShelfController', shelfOperations);