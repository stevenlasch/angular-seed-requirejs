define([
	'controllers/controllers'
], function(controllers) {
    
    controllers.controller('view1Ctrl', [
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