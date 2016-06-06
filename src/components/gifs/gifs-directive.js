(function () {
    
	function gifsCtrl($scope, GifFactory, FilterFactory, $routeParams) {
		var vm = this;
		var page = 0;
		var category = vm.category || $routeParams.subCategory;
		var filter = FilterFactory.getFilter();
		FilterFactory.filterChangedSubscribe($scope, handleFilterChanged);

		vm.selectGif = function(gif) {
			GifFactory.updateView(gif._id);
			vm.selectedGif = gif;
		};
		
		vm.loadMore = function() {
			page++;
			getGifs();
		};
		
		getGifs();
		
		function getGifs() {
			GifFactory.getGifs(vm.category, vm.limit, page, filter).then(handleGifs);
		}
		
		function handleFilterChanged() {
			page = 0;
			vm.gifs = [];
			filter = FilterFactory.getFilter();
			getGifs();
		}
		
		function handleGifs(gifs) {
			vm.showButton = gifs.data.length === vm.limit;
			vm.gifs =  vm.gifs ? vm.gifs.concat(gifs.data) : gifs.data;
		}
	}

	function gifs() {
		return {
			restrict: 'E',
			scope: {
				category: '=',
				limit: '=',
				selectedGif: '='
			},
			controller: gifsCtrl,
			controllerAs: 'vm',
			templateUrl: 'src/components/gifs/gifs.html',
			bindToController: true
		};
	}

	angular.module('app').directive('gifs', gifs);
}());
