(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('gifListCtrl', gifListCtrl);
	
	gifListCtrl.$inject = ['$routeParams'];
	function gifListCtrl($routeParams) {
		var vm = this;
		vm.subCategory = $routeParams.subCategory;
	}
}());