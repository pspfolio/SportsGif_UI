(function () {
	
	FilterFactory.$inject = ['$localStorage'];
	function FilterFactory($localStorage) {
		var FilterFactory = {};
		
		FilterFactory.setFilter = function (filter) {
			$localStorage.filter = filter;
		};
		
		FilterFactory.getFilter = function() {
			if(!$localStorage.filter) {
				$localStorage.filter = 'Newest';
			}
			
			return $localStorage.filter;
		};
		
		return FilterFactory;
	}

	angular.module('app').factory('FilterFactory', FilterFactory);
}())