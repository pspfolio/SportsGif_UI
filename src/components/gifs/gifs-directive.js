(function () {
    
	function gifsCtrl($scope, GifFactory, FilterFactory, $routeParams) {
		var vm = this;

		vm.selectGif = function(gif) {
			vm.gifSelected({gif: gif});
		};
	}

	function gifs() {
		return {
			restrict: 'E',
			scope: {
				gifs: '=',
				showButton: '=',
				gifSelected: '&',
				gifLoadMore: '&'
			},
			controller: gifsCtrl,
			controllerAs: 'vm',
			templateUrl: 'src/components/gifs/gifs.html',
			bindToController: true
		};
	}

	angular.module('app').directive('gifs', gifs);
}());
