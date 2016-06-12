(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('mainpageCtrl', mainpageCtrl);
	
	function mainpageCtrl($rootScope, $scope, GifFactory, FilterFactory) {
		var vm = this;
		var category = "nba";
		var limit = 10;
		var page = 0;
		var searchText = '';
		var filter = FilterFactory.getFilter();
		
		vm.gifSelected = gifSelected;
		vm.gifLoadMore = gifLoadMore;
		vm.gifSearchByText = gifSearchByText;
		
		// FILTERS
		FilterFactory.filterChangedSubscribe($scope, handleFilterChanged);
		function handleFilterChanged() {
			page = 0;
			emptyGifs();
			filter = FilterFactory.getFilter();
			getGifs();
		}
		
		// GIFS
		getGifs();
		
		function getGifs() {
			GifFactory.getGifs(category, limit, page, filter, searchText).then(handleGifs);
		}
		
		function handleGifs(gifs) {
			vm.showButton = gifs.data.length === limit;
			vm.gifs =  vm.gifs ? vm.gifs.concat(gifs.data) : gifs.data;
		}
				
		function gifSelected(gif) {
			GifFactory.updateView(gif._id);
			$rootScope.$broadcast('playGif', gif);
		}
		
		function gifSearchByText(text) {
			emptyGifs();
			searchText = text;
			getGifs();
		}
		
		function gifLoadMore() {
			page++;
			getGifs();
		}
		
		function emptyGifs() {
			vm.gifs = [];
		}
	}
}());