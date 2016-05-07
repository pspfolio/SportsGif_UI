(function () {
    
	function gifsCtrl(GifFactory, $routeParams) {
		var vm = this;
		var page = 0;
		
		var category = vm.category || $routeParams.subCategory;
		
		GifFactory.getGifs(category, vm.limit).then(function () {
			vm.gifs = sliceGifs(0);
		});
		
		vm.selectGif = function(gif) {
			vm.selgif = gif;
		};
		
		vm.loadMore = function() {
			page++;
			var newGifs = sliceGifs(page*50);
			console.log(newGifs);
			vm.gifs = vm.gifs.concat(newGifs);
		};
		
		// move to factory / get data always from backend
		function sliceGifs(skip) {
			var gifs = null;
			if(skip === 0) {
				gifs = GifFactory.gifs.slice(0, 50);
			} else {
				gifs = GifFactory.gifs.slice(skip, skip*2);
			}
			
			return gifs;
		}
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
