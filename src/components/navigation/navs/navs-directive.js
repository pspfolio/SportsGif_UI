function navs() {
    return {
        restrict: 'E',
        scope: {},
        transclude: true,
        controller: function() {
            this.navs = [];
        },
        controllerAs: 'navs',
        template: `
        <nav>
            <ul>
                <li>Test</li>
            </ul>
        </nav>`
    };
}

angular.module('app', []).directive('navs', navs);
