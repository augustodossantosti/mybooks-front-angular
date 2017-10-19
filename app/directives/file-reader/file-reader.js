/**
 * Contém a definição da diretiva que permite obter arquivos
 * submetidos através da tag <input type="file">.
 * 
 * @author Augusto Santos
 * @version 1.0 19/10/17
 */

 function fileReader($parse) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var model = $parse(attrs.fileReader);
           var modelSetter = model.assign;
           element.bind('change', function(){
              scope.$apply(function(){
                 modelSetter(scope, element[0].files[0]);
              });
           });
        }
     };
 }

 fileReader.$inject = ['$parse'];

 angular
    .module('mybooks')
    .directive('fileReader', fileReader);