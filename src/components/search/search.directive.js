(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('search', search);
	
	function search() {
		return {
			restrict: 'E',
			scope: {
				searchText: '&'
			},
			templateUrl: 'src/components/search/search.html',
			controller: searchCtrl,
			controllerAs: 'vm',
			bindToController: true
		};
	}
	
	function searchCtrl() {
		var vm = this;
		
		vm.searchString = '';
		
		vm.changed = function() { 
			vm.searchText({text: vm.searchString});
		};
		
		vm.modelOptions = {
			debounce: {
				default: 400
			}
		};
	}
}());