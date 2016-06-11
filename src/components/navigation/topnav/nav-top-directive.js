(function () {
	'use strict';
	
	function navtop() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'src/components/navigation/topnav/nav-top.html',
		};
	}
	
	angular.module('app').directive('navtop', navtop);
}());