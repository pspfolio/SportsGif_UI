(function() {
	'use strict';
	
	angular
		.module('app')
		.constant('API_GIFS_URL', 'http://localhost:1337/api/gifs/')
		.constant('API_GIFS_UPDATE_VIEW', 'http://localhost:1337/api/views/')
}());