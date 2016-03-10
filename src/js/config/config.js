(function(){

    function Configz($routeProvider, $sceDelegateProvider) {

        $routeProvider
        .when('/', {
            templateUrl: 'src/partials/frontpage.html',
            controller: 'gifsCtrl',
            controllerAs: 'vm'
        })
        .when('/nba', {
            templateUrl: '../../partials/gifs-nba.html',
            controller: '../ctrl/gifsCtrl',
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
