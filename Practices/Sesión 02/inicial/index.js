var resultadosModule = angular.module('resultadosModule', ['resultadosDirective']);
resultadosModule.controller('resultadosController', function ($scope, $http) {
    var url = 'personal.json';
    $http.get(url).success(function (response) {
        $scope.personal = response;
        $scope.$broadcast('sendLista', $scope.personal);
    });
});
var resultadosDirective = angular.module('resultadosDirective', ['vencidoFilter'])
    .directive('resultados', function () {
        // Definicion de la directiva
        return {
            restrict: 'E',
            scope: {
                personal: '=listaPersonal'
            },
            templateUrl: 'resultadosTemplate.html'
        };
    })
    .controller('resultadosDirectiveController', function ($scope, $filter) {
        // Logica del controlador de la directiva
        // Funcion interna para convertir en mayusculas la propiedad dentro de la lista de objetos pasados como parametros
        var cambiarUppercase = function (lista, propiedad) {
            // Declaracion del filtro uppercase en el controlador
            var uppercaseFilter = $filter('uppercase');
            if (lista) {
                for (i = 0; i < lista.length; i++) {
                    lista[i][propiedad] =
                        uppercaseFilter(lista[i][propiedad]);
                }
                $scope.personal = lista;
            }
        };
        $scope.$on('sendLista', function (event, lista) {
            cambiarUppercase(lista, 'departamento');
        });

        //$scope.busqueda = '';
    });

angular.module('vencidoFilter', []).filter('vencido', function () {
    return function (personalDerrotado, id, uppercase) {
        var bandera = false;
        var out = '';

        if (id === "1") {
            bandera = true;
        }

        out = bandera ? 'Si' : 'No';

        if (uppercase) {
            out = out.toUpperCase();
        }

        return out;
    };
});