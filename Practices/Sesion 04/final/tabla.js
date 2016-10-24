var tablaModule = angular.module('tablaModule', [
	'myServiceModule'
]);

tablaModule.controller('tablaController', function($scope, $location, myService) {
	
	$scope.cambiarPagina = function() {
		$location.path('otra-pagina');
	};
	
	var initUsers = function() {
		$scope.users = myService.get();
	}
	
	var inicializacion = function() {
		initUsers();
	};
	
	inicializacion();
});