var servicioModule = angular.module('servicioModule', []);
servicioModule.factory('frutasFactory', function() {
	var factory = {};
	factory.obtenerFrutas = function() {
        return [100, 50, 75];
    };
    return factory;
});
servicioModule.service('frutasService', function(frutasFactory){
    this.obtener = function() {
        return frutasFactory.obtenerFrutas();
    }
});
