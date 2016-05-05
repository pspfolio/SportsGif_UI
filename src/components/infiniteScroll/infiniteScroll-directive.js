(function() {
	'use strict';
	
	angular.module('app').directive('psInfiniteScroll', psInfiniteScroll);
	
	function psInfiniteScroll() {
		return {
			restrict: 'A',
			scope: {
			},
			link: InfiniteLink
		};
	}
	
	function InfiniteLink($scope, element) {
		console.log("link");
		var ele = element[0];
		console.log(ele);
		element.bind('click', function() {
			console.log("cliick");
		});
		$document.bind('scroll', function() {
			console.log("scrolling");
		});
	}
}());