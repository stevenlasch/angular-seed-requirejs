define([
	'controllers/controllers'
], function(controllers) {
    
    controllers.controller('homeCtrl', [
        '$location',
        '$scope',
		function($location, $scope) {    

            // User clicks on the list button
            $scope.nav = function(directory) {
                $location.path("/" + directory);
            };

        }
    ]);
});