(function () {

	function Configz($routeProvider, $sceDelegateProvider) {

		$routeProvider
			.when('/', {
			templateUrl: 'src/partials/mainpage.html',
				controllerAs: 'vm',
				controller: 'mainpageCtrl'
			})
			.otherwise({ redirectTo: '/' });

		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'http://streamable.com/**',
			'https://streamable.com/**',
			'http://www.streamable.com/**',
			'https://www.streamable.com/**',
			'http://gfycat.com/**',
			'https://gfycat.com/**',
			'http://www.gfycat.com/**',
			'https://www.gfycat.com/**',
			'https://giant.gfycat.com/**',
			'https://zippy.gfycat.com/**',
			'https://fat.gfycat.com/**'
		]);
	}

	 angular.module('app').config(Configz);
}());
