

function tokenHandler($localStorage, __env) {

    return {
        getToken: getToken,
        extractToken: extractToken,
        deleteToken: deleteToken
    };

    function getToken() {
        return $localStorage.token;
    }

    function extractToken(response) {
        const token = response.headers(__env.authentication.tokenHeader);
        $localStorage.token = token;
    }

    function deleteToken() {
        delete $localStorage.token;
    }
}

tokenHandler.$inject = ['$localStorage', '__env'];

angular
    .module('mybooks')
    .factory('TokenHandler', tokenHandler);