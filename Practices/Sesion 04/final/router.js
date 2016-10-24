var routerModule = angular.module('routerModule', [
	'ngRoute',
	'tablaModule',
	'otraModule'
]);

routerModule.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/tabla', {
			templateUrl:    'tabla.html',
			controller:     'tablaController'
		})
		.when('/otra-pagina', {
			templateUrl:    'otra.html',
			controller:     'otraController'
		})
        .otherwise({
			redirectTo: '/tabla'
		});
	}
]);