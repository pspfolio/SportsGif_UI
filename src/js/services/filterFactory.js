(function () {
	
	FilterFactory.$inject = ['$rootScope', '$localStorage'];
	function FilterFactory($rootScope, $localStorage) {
		var FilterFactory = {};
		
		FilterFactory.setFilter = function (filter) {
			$localStorage.filter = filter;
			$rootScope.$emit('filter:changed');
		};
		
		FilterFactory.getFilter = function() {
			if(!$localStorage.filter) {
				$localStorage.filter = 'Newest';
			}
			return $localStorage.filter;
		};
		
		FilterFactory.filterChangedSubscribe = function(scope, callback) {
			var handler = $rootScope.$on('filter:changed', callback);
			scope.$on('$destroy, handler');
		};
		
		return FilterFactory;
	}

	angular.module('app').factory('FilterFactory', FilterFactory);
}());