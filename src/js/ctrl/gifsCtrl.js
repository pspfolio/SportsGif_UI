(function(){

    function GifsCtrl(GifFactory) {
        var vm = this;

    	vm.gifs = GifFactory.gifs;
        vm.selectedGif = "";

        vm.setGif = function(value) {
            vm.selectedGif = value;
        };

        GifFactory.getGifs().then(function() {
            vm.gifs = GifFactory.gifs;
        });
    };

    angular.module('app').controller('gifsCtrl', GifsCtrl);

})();
