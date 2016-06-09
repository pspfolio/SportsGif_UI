(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('search', search);
	
	function search() {
		return {
			restrict: 'E',
			scope: {
			},
			templateUrl: 'src/components/search/search.html',
			controller: searchCtrl,
			controllerAs: 'vm'
		}
	};
	
	function searchCtrl() {
		var vm = this;
		
		vm.searchString = '';
		vm.changed = function() {
			console.log("changed");
		}
		vm.modelOptions = {
			debounce: {
				default: 400
			}
		}
	}
}());