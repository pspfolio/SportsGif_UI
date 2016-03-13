(function(){

    function Configz($routeProvider, $sceDelegateProvider) {

        $routeProvider
        .when('/', {
            templateUrl: 'src/partials/frontpage.html',
            controller: 'gifsCtrl',
            controllerAs: 'vm'
        })
        .when('/sport/:subCategory', {
            templateUrl: 'src/partials/gif-list.html',
            controller: 'gifsCtrl',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://streamable.com/**',
            'https://streamable.com/**',
            'http://www.streamable.com/**',
            'https://www.streamable.com/**',
            'http://gfycat.com/**',
            'https://gfycat.com/**',
            'http://www.gfycat.com/**',
            'https://www.gfycat.com/**'
        ]);
    };

    angular.module('app').config(Configz);
})();
