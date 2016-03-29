(function () {
    
    function gifsCtrl($scope, GifFactory, $routeParams) {
        var vm = this;
        var category = $scope.category || $routeParams.subCategory;
        var limit = $scope.limit;
        vm.gifs = GifFactory.gifs;
        vm.selectedGif = {};

        vm.setGif = function (gif) {
            vm.selectedGif = gif;
        };

        GifFactory.getGifs(category, limit).then(function () {
            vm.gifs = GifFactory.gifs;
        });
    }

    function gifs() {
        return {
            restrict: 'E',
            scope: {
                category: '@',
                limit: '@'
            },
            controller: gifsCtrl,
            controllerAs: 'vm',
            templateUrl: 'src/components/gifs/gifs.html'
        };
    }

    angular.module('app').directive('gifs', gifs);
}());
