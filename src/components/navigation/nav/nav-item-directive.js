(function () {

	function link($scope, $element, $attrs, $ctrl) {
		$scope.nav = {
			url: $scope.url,
			selected: false
		};
		$ctrl.addNav($scope.nav);
	}

	function navitem() {
		return {
			restrict: 'E',
			scope: {
				url: '@'
			},
			require: '^navs',
			transclude: true,
			replace: true,
			templateUrl: 'src/components/navigation/nav/nav-item.html',
			link: link
		};
	}

	angular.module('app').directive('navitem', navitem);
}());
