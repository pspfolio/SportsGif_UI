(function(){

    function Configz($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://streamable.com/**'
        ]);
    };

    angular.module('app').config(Configz);
})();
