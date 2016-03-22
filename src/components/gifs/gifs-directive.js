(function() {

    function gifs() {
        return {
            restrict: 'E',
            scope: {
                category: '@'
            },
            templateUrl: 'src/components/gifs/gifs.html'
        }
    }

    angular.module('app').directive('gifs', gifs);
}());
