(function () {
    
    function gifplayerCtrl() {
        var vm = this;
        vm.selectedGif = {};
        
        vm.setGif = function (gif) {
            vm.selectedGif = gif;
        };
    }
    
    function gifplayer() {
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            controller: gifplayerCtrl,
            controllerAs: 'vm',
            templateUrl: 'src/components/gifplayer/gifplayer.html'
        };
    }
    
    angular.module('app').directive('gifplayer', gifplayer);
}());