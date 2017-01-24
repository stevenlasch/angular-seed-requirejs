require.config({
	paths: {
    	'angular': '../node_modules/angular/angular.min',
    	'angular-route': '../node_modules/angular-route/angular-route.min',
		'angular-ui.bootstrap': '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'domReady': '../node_modules/domready/ready.min',
        'firebase': '../node_modules/firebase/firebase'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-ui.bootstrap': {
			deps: ['angular']
		}
	},
	priority: ['angular']
});

require([
	'angular',
	'app',
	'domReady',
    'controllers/homeCtrl',
    'controllers/view1Ctrl',
    'controllers/view2Ctrl'
], function (angular, app, domReady) {
    'use strict';
    
	app.config([
		'$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'views/home.html',
				controller: 'homeCtrl'
        	})
        	.when('/view1', {
				templateUrl: 'views/view1.html',
				controller: 'view1Ctrl'
        	})
			.when('/view2', {
				templateUrl: 'views/view2.html',
				controller: 'view2Ctrl'
			});
		}
	]);

	domReady(function() {
      	angular.bootstrap(document, ['MyApp']);
    });
});
