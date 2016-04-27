(function() {
	'use strict';
	
	angular.module('app').directive('modal', modal);
	
	function modal() {
		return {
			restrict: 'E',
			scope: {
				gif: '='
			},
			templateUrl: 'src/components/modal/modal.html',
			link: linkModal,
			replace: true,
		};
	}
	
	function linkModal(scope, element, attrs) {
		$(element).modal('hide');
		
		scope.showModal = function(value, elem) {
			if(value) {
				$(elem).modal('hide');
			} else {
				$(elem).modal('show');
			}
		};
		
		scope.$watch(function() {return scope.gif}, function(value) {
			scope.selectedGif = value;
			scope.showModal(Object.keys(scope.gif) == 0, element);
		});
		
		$(element).bind("hide.bs.modal", function () {
			if (!scope.$$phase && !scope.$root.$$phase) {
				$(element[0].querySelector('.player')).attr('src', '');
				scope.selectedGif = {};
				scope.$apply();
			}
		});
	}

}());