(function(){

    function GifsCtrl(GifFactory, $routeParams) {
        var vm = this;
        vm.subCategory = $routeParams.subCategory || '';
    	vm.gifs = GifFactory.gifs;
        vm.selectedGif = {};

        vm.setGif = function(gif) {
            vm.selectedGif = gif;
        };

        GifFactory.getGifs(vm.subCategory).then(function() {
            vm.gifs = GifFactory.gifs;
        });
    };

    angular.module('app').controller('gifsCtrl', GifsCtrl);
})();
