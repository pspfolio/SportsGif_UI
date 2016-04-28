(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('frontpageCtrl', frontpageCtrl);
	
	function frontpageCtrl() {
		var vm = this;
		vm.categoryNba = "nba";
		vm.categorySoccer = "soccer";
		vm.limit = "5";
		vm.selectedGif = {};
	}
}());