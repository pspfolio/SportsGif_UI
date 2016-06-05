(function() {
	
	filtersCtrl.$inject = ['FilterFactory'];
	function filtersCtrl(FilterFactory, $routeParams) {
		var vm = this;
		vm.filters = ['Newest', 'Popular', 'Picks'];
		vm.selectedFilter = FilterFactory.getFilter();
		
		vm.selectFilter = function(filter) {
			FilterFactory.setFilter(filter);
			vm.selectedFilter = FilterFactory.getFilter();
		};
		
		vm.isActive = function(filter) {
			return filter === vm.selectedFilter;
		};
	}

	function filters() {
		return {
			restrict: 'E',
			scope: {
			},
			controller: filtersCtrl,
			controllerAs: 'vm',
			templateUrl: 'src/components/filters/filters.html',
			bindToController: true
		};
	}
	
	angular.module('app').directive('filters', filters);
}());