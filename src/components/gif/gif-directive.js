(function () {
    
	function gifCtrl() {
		var vm = this;
		
		vm.selectGif = function(gif) {
			vm.gifSelected({gif: gif});
		};
	}

	function gif() {
		return {
			restrict: 'E',
			scope: {
				gif: '=',
				gifSelected: '&',
			},
			controller: gifCtrl,
			controllerAs: 'vm',
			templateUrl: 'src/components/gif/gif.html',
			bindToController: true
		};
	}

	angular.module('app').directive('gif', gif);
}());