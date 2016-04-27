(function() {
	'use strict';
	
	angular.module('app').directive('modal', modal);
	
	function modal() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'src/components/modal/modal.html',
			link: linkModal
		};
	}
	
	function linkModal(scope, element, attrs) {
		console.log(element);
		$(element).modal('hide');

		scope.$watch(function() {return attrs.visible}, function(value) {
			console.log(value);
			if(value) {
				$(element).modal('show');
			} else {
				$(element).modal('hide');
			}
		});
	}
	
}());