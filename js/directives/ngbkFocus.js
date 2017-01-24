/**
 * Use in template as ngbk-focus
 */

define([
	'directives/directives'
], function(directives) {

	directives.directive('ngbkFocus', function() {
        return {
            link: function(scope, element, attrs, controller) {
                element[0].focus();
            }
        }
	});

});
