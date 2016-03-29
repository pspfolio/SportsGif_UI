(function () {
    
    function gifsCtrl($scope, GifFactory, $routeParams) {
        var vm = this;
        var category = $scope.category || $routeParams.subCategory;
        
        var limit = $scope.limit;
        vm.gifs = GifFactory.gifs;

        GifFactory.getGifs(category, limit).then(function () {
            vm.gifs = GifFactory.gifs;
        });
    }
    
    function gifsLink(scope, element, attrs, ctrl) {
        scope.selectGif = function (gif) {
            ctrl.setGif(gif);
        }
    }

    function gifs() {
        return {
            restrict: 'E',
            scope: {
                category: '@',
                limit: '@'
            },
            require: '^gifplayer',
            controller: gifsCtrl,
            controllerAs: 'vm',
            link: gifsLink,
            templateUrl: 'src/components/gifs/gifs.html'
        };
    }

    angular.module('app').directive('gifs', gifs);
}());
