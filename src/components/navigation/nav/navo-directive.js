(function() {

    function link($scope, $element, $attrs, $ctrl) {
        $scope.nav = {
            url: $scope.url,
            text: $scope.text,
            selected: false
        };
        console.log($scope.nav);
        $ctrl.addNav($scope.nav);
    }

    function navo() {
        return {
            restrict: 'E',
            scope: {
                url: '@',
                text: '@'
            },
            require: '^navs',
            transclude: true,
            link: link
        };
    };

    angular.module('app').directive('navo', navo);
})();
