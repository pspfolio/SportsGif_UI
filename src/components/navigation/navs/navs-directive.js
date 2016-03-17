(function(){

function ctrl($scope, $location) {
    var vm = this;
    this.navs = [];

    $scope.$on("$locationChangeSuccess", function() {
        vm.setActiveNav();
    });

    this.addNav = function(nav) {
        this.navs.push(nav);
        this.setActiveNav();
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
        scope: {
            title: '@'
        },
        transclude: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'src/components/navigation/navs/navs.html'
    };
}

angular.module('app').directive('navs', navs);

})();
