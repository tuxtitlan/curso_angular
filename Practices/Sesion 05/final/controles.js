var controlesModule = angular.module('controlesModule', [
	
])
.directive('controles', function() {
	// Definicion de la directiva
	return {
		restrict: 					'E',
		scope: {
			tipo:					'=tipo',
			manzanas:				'=totalManzanas',
			peras:					'=totalPeras',
			naranjas:				'=totalNaranjas'
		},
		templateUrl: 				'controles.html'
	};
}).controller('controlesController', function($scope) {
	
});