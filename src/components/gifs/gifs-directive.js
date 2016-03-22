(function() {

    function gifsCtrl($scope, GifFactory) {
        var vm = this;
        var category = $scope.category;
        vm.gifs = GifFactory.gifs;
        vm.selectedGif = {};

        vm.setGif = function(gif) {
            vm.selectedGif = gif;
        };
        console.log(category);

        GifFactory.getGifs(category).then(function() {
            vm.gifs = GifFactory.gifs;
        });
    };

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
        }
    }

    angular.module('app').directive('gifs', gifs);
}());
