(function () {

	GifFactory.$inject = ['$http', 'API_GIFS_URL'];
	function GifFactory($http, API_GIFS_URL) {
		var GifFactory = {};

		GifFactory.gifs = [];

		GifFactory.getGifs = function (subCategory, limit, skip) {
			var baseurl = API_GIFS_URL + subCategory;
			var url = limit ? baseurl + '/' + limit : baseurl;

			return $http.get(url).success(function (data) {
				var gifs = InitData(data);
				GifFactory.gifs = gifs;
			}).error(function (data) {
				console.log('error in get');
			});
		};
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
