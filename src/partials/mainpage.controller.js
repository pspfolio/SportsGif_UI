(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('mainpageCtrl', mainpageCtrl);
	
	function mainpageCtrl($rootScope, $scope, GifFactory, FilterFactory) {
		var category = "nba";
		var limit = 10;
		var vm = this;
		var page = 0;
				
		// GIFS
		
		getGifs();
		
		function getGifs() {
			GifFactory.getGifs(category, limit, page, filter).then(handleGifs);
		}
		
		function handleGifs(gifs) {
			vm.showButton = gifs.data.length === limit;
			vm.gifs =  vm.gifs ? vm.gifs.concat(gifs.data) : gifs.data;
		}
		
		vm.gifSelected = function(gif) {
			GifFactory.updateView(gif._id);
			$rootScope.$broadcast('playGif', gif);
		}
		
		vm.gifLoadMore = function() {
			page++;
			getGifs();
		}
		
		// FILTERS
		FilterFactory.filterChangedSubscribe($scope, handleFilterChanged);
		var filter = FilterFactory.getFilter();
		function handleFilterChanged() {
			page = 0;
			vm.gifs = [];
			filter = FilterFactory.getFilter();
			getGifs();
		}
	}
}());