angular.module('main-application.templates', []);
angular.module('main-application', [
    'component.ajax-error',
    'component.app-version',
    'directive-application',
    'cat-application',
    'main-application.templates',
    'api-application',
    'dog-application',
    'ui.bootstrap',
]).config(function (){})
.constant('COUNT_CAT_FOR_CRAZY_DOG', 2)
.constant('MAX_COUNT_CLICK_CAT', 5)

.value('_rootScopeArray', [])
.value('_showScopeObjects', true)
.constant('CREATE_SCOPE_OBJECT', true)
.run(function($rootScope, _rootScopeArray, _showScopeObjects){
	$rootScope.showScopeObjects = _showScopeObjects;
    for(method in $rootScope) _rootScopeArray.push(method);
});