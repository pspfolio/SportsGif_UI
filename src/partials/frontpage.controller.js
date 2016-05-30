(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('frontpageCtrl', frontpageCtrl);
	
	function frontpageCtrl() {
		var vm = this;
		vm.categoryNba = "nba";
		vm.selectedGif = {};
	}
}());