define([
	'angular',
	'angular-route',
	'angular-ui.bootstrap',
	'controllers/controllers',
	'directives/directives',
	'filters/filters',
	'services/services'
], function (angular) {
	'use strict';

	// The order here doesn't have to match to above
	// Should be alphabetical
	return angular.module('MyApp', [
		'controllers',
		'directives',
		'filters',
		'ngRoute',
		'services',
		'ui.bootstrap'
	]);
});
