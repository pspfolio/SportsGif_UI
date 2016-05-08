(function () {
    
	function gifsCtrl(GifFactory, $routeParams) {
		var vm = this;
		var page = 0;		
		var category = vm.category || $routeParams.subCategory;
		
		vm.selectGif = function(gif) {
			console.log(gif);
			console.log(vm.selectedGif);
			vm.selectedGif = gif;
		};
		
		vm.loadMore = function() {
			page++;
		};
		
		getGifs();
		
		function getGifs() {
			GifFactory.getGifs(vm.category, vm.limit)
				.then(function (gifs) {
					var data = gifs.data;
					vm.gifs =  vm.gifs ? vm.gifs.concat(data) : data;
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
