(function () {
    
	function gifsCtrl(GifFactory, $routeParams) {
		var vm = this;
		
		var category = vm.category || $routeParams.subCategory;
		
		GifFactory.getGifs(category, vm.limit).then(function () {
			vm.gifs = GifFactory.gifs;
		});
		
		vm.selectGif = function(gif) {
			vm.selgif = gif;
		};
	}

	function gifs() {
		return {
			restrict: 'E',
			scope: {
				category: '=',
				limit: '=',
				selgif: '='
			},
			controller: gifsCtrl,
			controllerAs: 'vm',
			templateUrl: 'src/components/gifs/gifs.html',
			bindToController: true
		};
	}

	angular.module('app').directive('gifs', gifs);
}());
