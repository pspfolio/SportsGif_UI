(function(){

    function GifsCtrl(GifFactory) {
        var vm = this;

    	vm.gifs = GifFactory.gifs;

        GifFactory.getGifs().then(function() {
            vm.gifs = GifFactory.gifs;
        });
    };

    angular.module('app').controller('gifsCtrl', GifsCtrl);

})();
