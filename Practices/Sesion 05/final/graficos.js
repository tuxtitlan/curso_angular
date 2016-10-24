var graficosModule = angular.module('graficosModule', [])
.directive('graficos', function() {
	return {
		restrict: 					'E',
		scope: {
			tipo:					'=tipo',
			dato1:					'=dato1',
			dato2:					'=dato2',
			dato3:					'=dato3'
		},
		templateUrl: 				'graficos.html',
		link: function(scope) {
			scope.pintarGrafica = function() {
				$('#chartContainer').highcharts({
					chart: {
						type: scope.tipo
					},
					title: {
						text: 'Ventas de frutas en el dia'
					},
					subtitle: {
						text: 'Ejemplo de la sesion 05'
					},
					plotOptions: {
						column: { depth: 25, animation: false },
						line: { depth: 25, animation: false },
						area: { depth: 25, animation: false },
						pie: { depth: 25, animation: false }
					},
					xAxis: {
						categories: ['Manzanas', 'Peras', 'Naranjas']
					},
					yAxis: {
						title: {
							text: null
						}
					},
					series: [{
						name: 'Ventas',
						data: [scope.dato1, scope.dato2, scope.dato3]
					}]
				});
			};
			scope.$on('cambiarManzanas', function(event, args) {
				scope.dato1 = args.nuevo;
				scope.pintarGrafica();
			});
			scope.$on('cambiarPeras', function(event, args) {
				scope.dato2 = args.nuevo;
				scope.pintarGrafica();
			});
			scope.$on('cambiarNaranjas', function(event, args) {
				scope.dato3 = args.nuevo;
				scope.pintarGrafica();
			});
			scope.$on('cambiarTipo', function(event, args) {
				scope.tipo = args.nuevo;
				scope.pintarGrafica();
			});
			// Pinta la grafica por primera vez
			scope.pintarGrafica();
		}
	};
}).controller('graficosController', function($scope) {
	
});