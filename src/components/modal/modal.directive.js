(function() {
	'use strict';
	
	angular.module('app').directive('modal', modal);
	
	function modal() {
		return {
			restrict: 'E',
			scope: {
				modalClosed: '&'
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
		
		
		/*scope.$watch(function() {return scope.gif}, function(newValue, oldValue) {
			console.log(newValue, oldValue);
			scope.selectedGif = newValue;
			scope.showModal(Object.keys(scope.gif) == 0, element);
		}, true);*/
		
		scope.$on('playGif', function(event, data) {
			scope.selectedGif = {url: ""};
			scope.selectedGif = data;
			scope.showModal(Object.keys(data) == 0, element);
		});
		
		$(element).bind("hide.bs.modal", function () {
			if (!scope.$$phase && !scope.$root.$$phase) {
				// removing iframe player source -> not playing video when hidden
				$(element[0].querySelector('.player')).attr('src', '');
				scope.modalClosed();
			}
		});
	}

}());