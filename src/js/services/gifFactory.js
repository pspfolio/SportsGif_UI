(function () {

	GifFactory.$inject = ['$http', 'API_GIFS_URL', 'API_GIFS_UPDATE_VIEW'];
	function GifFactory($http, API_GIFS_URL, API_GIFS_UPDATE_VIEW) {
		var GifFactory = {};
		
		// Getting gifs from API
		GifFactory.getGifs = function (subCategory, limit, skip, filter) {
			var url = buildUrl(API_GIFS_URL, subCategory, limit, skip, filter);
			
			return $http.get(url).success(function (data) {
				var gifs = InitData(data);
				return gifs;
			}).error(function (data) {
				console.log('error in get');
			});
		};
		
		// Updating gif viewcount
		GifFactory.updateView = function(id) {
			$http.put(API_GIFS_UPDATE_VIEW + id);
		};
		
		return GifFactory;
	}

	// Adding added property to gif object with moment.js
	function InitData(gifs) {
		var result = gifs.map(function (gif) {
			gif.added = moment(gif.created_at, "YYYY-MM-DD hh:mm:ss").fromNow();
			return gif;
		});
		return result;
	}
	
	// Building url based on parameters
	function  buildUrl(apiUrl, subCategory, limit, skip, filter) {
		var baseurl = apiUrl + subCategory;
		var take = limit ? limit : 50;
		var page = skip ? skip * take : 0;
		var url = baseurl + '/' + take + '/' + page + '/' + filter;
		return url;
	}

	angular.module('app').factory('GifFactory', GifFactory);

}());
