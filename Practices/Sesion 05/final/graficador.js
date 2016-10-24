var graficadorModule = angular.module('graficadorModule', ['controlesModule', 'graficosModule', 'servicioModule']);
graficadorModule.controller('graficadorController', function($scope, frutasService) {
	var inicializarDatos = function() {
		var datos = frutasService.obtener();
		$scope.manzanasTotales = datos[0];
		$scope.perasTotales = datos[1];
		$scope.naranjasTotales = datos[2];
		$scope.tipo = 'column';
	};
	var inicializarWatchers = function() {
		// Declaracion de watchers
		$scope.$watch('manzanasTotales', function(valorActual, valorAnterior) {
			if(valorActual) {
				valorActual = parseInt(valorActual);
			}
			$scope.$broadcast('cambiarManzanas', {nuevo: valorActual});
		});
		// Declaracion de watchers
		$scope.$watch('perasTotales', function(valorActual, valorAnterior) {
			if(valorActual) {
				valorActual = parseInt(valorActual);
			}
			$scope.$broadcast('cambiarPeras', {nuevo: valorActual});
		});
		// Declaracion de watchers
		$scope.$watch('naranjasTotales', function(valorActual, valorAnterior) {
			if(valorActual) {
				valorActual = parseInt(valorActual);
			}
			$scope.$broadcast('cambiarNaranjas', {nuevo: valorActual});
		});
		
		// Declaracion de watchers
		$scope.$watch('tipo', function(valorActual, valorAnterior) {
			$scope.$broadcast('cambiarTipo', {nuevo: valorActual});
		});
	};
	inicializarDatos();
	inicializarWatchers();
});