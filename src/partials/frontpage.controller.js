(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('frontpageCtrl', frontpageCtrl);
	
	function frontpageCtrl($rootScope) {
		var vm = this;
		vm.category = "nba";
		vm.gifSelected = function(gif) {
			$rootScope.$broadcast('playGif', gif);
		}

	}
}());