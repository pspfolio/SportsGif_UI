(function () {
    
	function gifsCtrl(GifFactory, $routeParams) {
		var vm = this;
		var page = 0;
		var category = vm.category || $routeParams.subCategory;
		
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
			GifFactory.getGifs(vm.category, vm.limit, page)
				.then(function (gifs) {
					vm.gifs =  vm.gifs ? vm.gifs.concat(gifs.data) : gifs.data;
				});
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
