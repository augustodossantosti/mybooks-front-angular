/**
 * Contém a definição do módulo principal da aplicação
 * e suas dependências.
 * 
 * @author Augusto Santos
 * @version 1.0 24/05/17
 */

 // Load environment variables
const env = {};
Object.assign(env, window.__env);

angular
    .module('mybooks', ['ngStorage', 'ngRoute'])
    .constant('__env', env);