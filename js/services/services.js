/**
 * Here we create a new requirejs module using 'define'
 **/

define([
    'angular'
], function(angular) {
    'use strict';

    return angular.module('services', ['ui.bootstrap']);
});
