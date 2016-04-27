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
    
	function gifsLink(scope, element, attrs, ctrl) {
		/*scope.selectGif = function (gif) {
			ctrl.setGif(gif);
		};
        */
		/*scope.selectedGif = function () {
			return ctrl.getSelectedGif();
		};*/
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
			link: gifsLink,
			templateUrl: 'src/components/gifs/gifs.html',
			bindToController: true
		};
	}

	angular.module('app').directive('gifs', gifs);
}());
