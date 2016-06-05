(function () {

	GifFactory.$inject = ['$http', 'API_GIFS_URL', 'API_GIFS_UPDATE_VIEW'];
	function GifFactory($http, API_GIFS_URL, API_GIFS_UPDATE_VIEW) {
		var GifFactory = {};
		
		GifFactory.getGifs = function (subCategory, limit, skip) {
			var baseurl = API_GIFS_URL + subCategory;
			var take = limit ? limit : 50;
			var page = skip ? skip * take : 0;
			var url = baseurl + '/' + take + '/' + page;

			return $http.get(url).success(function (data) {
				var gifs = InitData(data);
				return gifs;
			}).error(function (data) {
				console.log('error in get');
			});
		};
		
		GifFactory.updateView = function(id) {
			$http.put(API_GIFS_UPDATE_VIEW + id);
		}
		
		return GifFactory;
	}

	function InitData(gifs) {
		var result = gifs.map(function (gif) {
			gif.added = moment(gif.created_at, "YYYY-MM-DD hh:mm:ss").fromNow();
			return gif;
		});
		return result;
	}

	angular.module('app').factory('GifFactory', GifFactory);

}());
