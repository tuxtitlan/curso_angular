var routerModule = angular.module('routerModule', [
	'ngRoute',
	'graficadorModule'
]);

routerModule.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/graficador', {
			templateUrl:    'graficador.html',
			controller:     'graficadorController'
		})
		.otherwise({
			redirectTo: '/graficador'
		});
	}
]);