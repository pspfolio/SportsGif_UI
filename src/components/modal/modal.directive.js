(function() {
	'use strict';
	
	angular.module('app').directive('modal', modal);
	
	function modal() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'src/components/modal/modal.html',
			link: linkModal,
			replace: true
		};
	}
	
	function linkModal(scope, element, attrs) {
		console.log(element);
		$(element).modal('hide');

		scope.showModal = function(value, elem) {
			if(value) {
				$(elem).modal('show');
			} else {
				$(elem).modal('hide');
			}
		}
		
		scope.$watch(function() {return attrs.visible}, function(value) {
			scope.showModal(value, element);
		});
	}
	
}());