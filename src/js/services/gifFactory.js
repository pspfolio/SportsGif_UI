(function(){

    function GifFactory($http) {
        var GifFactory = {};

        GifFactory.gifs = [];

        GifFactory.getGifs = function() {
            return $http.get('http://localhost:1337/api/gifs').success(function (data) {
        		GifFactory.gifs = data;
        	}).error(function (data) {
        		console.log('error in get');
        	});
        }

        return GifFactory;
    }

    angular.module('app').factory('GifFactory', GifFactory);

})();
