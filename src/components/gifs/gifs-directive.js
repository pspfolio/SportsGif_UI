(function() {

    function gifs() {
        return {
            restrict: 'E',
            scope: {
                category: '@'
            },
            controller: ctrl,
            controllerAs: 'vm',
            templateUrl: 'src/components/gifs/gifs.html'
        }
    }

    angular.module('app').directive('gifs', gifs);
}());
