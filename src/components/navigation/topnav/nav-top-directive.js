(function () {
	'use strict';
	
	function link(scope, element) {
		var button = element.find('.toggle-button');
	}
	
	function navtop() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'src/components/navigation/topnav/nav-top.html',
			link: link
		};
	}
	
	angular.module('app').directive('navtop', navtop);
}());