(function () {
	'use strict';
	
	function navtop() {
		return {
			restrict: 'E',
			scope: {
				searchText: '&'
			},
			templateUrl: 'src/components/navigation/topnav/nav-top.html',
			controller: searchCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}
	
	function searchCtrl() {
		var vm = this;
		
		vm.searchByText = function(text) {
			vm.searchText({text: text});
		};
	}
	
	angular.module('app').directive('navtop', navtop);
}());