(function(){

    function GifFactory($http) {
        var GifFactory = {};

        GifFactory.gifs = [];

        GifFactory.getGifs = function() {
            return $http.get('http://localhost:1337/api/gifs').success(function (data) {
                var gifs = InitData(data);
        		GifFactory.gifs = gifs;
        	}).error(function (data) {
        		console.log('error in get');
        	});
        }
        return GifFactory;
    }

    function InitData(gifs) {
        var result = gifs.map(function(gif) {
            gif.added = moment(gif.created_at, "YYYY-MM-DD").fromNow();
            return gif
        });
        return result;
    };

    angular.module('app').factory('GifFactory', GifFactory);

})();
