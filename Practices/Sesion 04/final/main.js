var mainModule = angular.module('app', ['routerModule']);
mainModule.run(function($rootScope) {
		console.log('Main application is running...');
});