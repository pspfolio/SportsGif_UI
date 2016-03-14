(function(){

function ctrl() {
    this.navs = [];
    this.addNav = function(nav) {
        this.navs.push(nav);
    }
}

function navs() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        controller: ctrl,
        controllerAs: 'navs',
        templateUrl: 'src/components/navigation/navs/navs.html'
    };
}

angular.module('app').directive('navs', navs);

})();
