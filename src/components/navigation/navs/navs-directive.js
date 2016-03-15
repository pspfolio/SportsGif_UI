(function(){

function ctrl() {
    this.navs = [];
    this.addNav = function(nav) {
        if(nav.url === '/NBA') {
            console.log("selected");
            nav.selected = true;
        }
        console.log('pushing', nav);
        this.navs.push(nav);
    }
}

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