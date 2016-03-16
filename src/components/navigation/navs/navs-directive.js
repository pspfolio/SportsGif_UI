(function(){

function ctrl($scope, $location) {
    var vm = this;
    this.navs = [];

    $scope.$on("$locationChangeSuccess", function() {
        vm.setActiveNav();
    });

    this.addNav = function(nav) {
        if(nav.url === '/NBA') {
            nav.selected = true;
        }
        this.navs.push(nav);
    }

    this.setActiveNav = function() {
        for(var i = 0; i < vm.navs.length; i++) {
            vm.navs[i].selected = vm.navs[i].url === '#' + $location.$$path;
        }
    }
};

function navs() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'src/components/navigation/navs/navs.html'
    };
}

angular.module('app').directive('navs', navs);

})();
