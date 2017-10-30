/**
 * Contém a definição das variáveis de ambiente e 
 * constantes a nível de aplicação.
 * 
 * @author Augusto Santos
 * @version 1.0 15/10/17
 */

 (function (window) {
     
     window.__env = window.__env || {};

     window.__env.apiUrl = {};
     window.__env.apiUrl.baseUrl = 'http://localhost:8081/mybooks';
     window.__env.apiUrl.signin = window.__env.apiUrl.baseUrl + '/login';
     window.__env.apiUrl.signup = window.__env.apiUrl.baseUrl + '/signup';

     window.__env.uiRoute = {};
     window.__env.uiRoute.home = '/',
     window.__env.uiRoute.signin = '/signin',
     window.__env.uiRoute.signin = '/signup',

     window.__env.authentication = {};
     window.__env.authentication.loginReqHeader = 'X-Requested-With';
     window.__env.authentication.loginReqHeaderValue = 'XMLHttpRequest';
     window.__env.authentication.tokenHeader = 'Authorization';
     window.__env.authentication.tokenPrefix = 'Bearer '

 }(this));