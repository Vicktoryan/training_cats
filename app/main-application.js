angular.module('main-application').directive('mainPage', function($rootScope){
    return {
        //scope: true,
        templateUrl: 'app/main-application.html',
        link: function($scope, _showScopeObjects){
            $scope.func = {};
            $scope.changeName = function(){
            };

            $scope.hideAllDirectives = function() {
                $rootScope.showScopeObjects = !$rootScope.showScopeObjects;
            }
        }
    };
});