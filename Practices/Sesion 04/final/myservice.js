var myServiceModule = angular.module('myServiceModule', []);
myServiceModule.factory('myTableFactory', function() {
	var factory = {};
	factory.getUsers = function() {
        return [
            {
                id:              1,
                name:			'Juan Perez',
				department:		'TI'
            },
			{
                id:              2,
                name:			'John Connor',
				department:		'Terminator'
            }
        ]
    };
    return factory;
});
myServiceModule.service('myService', function(myTableFactory){
    this.get = function() {
        return myTableFactory.getUsers();
    }
});
