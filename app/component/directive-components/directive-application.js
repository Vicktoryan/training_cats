angular.module('directive-application',[])
.directive('showScopeChange', function($compile, $rootScope, _rootScopeArray, CREATE_SCOPE_OBJECT, _showScopeObjects){
    return {
        transclude: true,
        scope: {
            nameScope: '@'
        },
        templateUrl: 'app/component/directive-components/show-scope-object.html',
        link: function($scope, iElm){
            if (!CREATE_SCOPE_OBJECT) return;

            $rootScope.$watch(function() {
                    return new Date().toTimeString();
                }, function(newValue, oldValue, scope) {
                $scope.showDirective = $rootScope.showScopeObjects//_showScopeObjects;
            });

            $scope.$parent.$watch(
                function() {
                    return new Date().toTimeString();
                },
                function(newValue, oldValue, scope) {
                    var changed = [];
                    var isRootScope = scope.$parent ? false : true;
                    if (isRootScope){
                        var enableChange = false;
                        for(var rootObjectName in $rootScope) {
                            if (_rootScopeArray.indexOf(rootObjectName) === -1 && rootObjectName[0] != '$')
                                changed.push({name : rootObjectName,  type: (typeof $rootScope[rootObjectName])});
                        }
                        if (!$scope.countChangeName){
                            $scope.nameScope += ' - SCOPE ROOT';
                            $scope.countChangeName = 1;
                        }
                    } else {
                        if (!$scope.countChangeName){
                            $scope.nameScope = 'scope - ' + $scope.nameScope;
                            $scope.countChangeName = 1;
                        }

                        for(var objectName in scope){

                            var enableChange = false;

                            for(var rootObjectName in $rootScope)
                                if (objectName === rootObjectName) enableChange = true;

                            if (enableChange === false){

                                var typeOfChange = (typeof scope[objectName]);
                                var isParent;
                                if (!isRootScope)
                                    for(var parentObjectName in scope.$parent){
                                        if (objectName === parentObjectName){
                                            isParent = true;
                                        }
                                    }

                                    if (typeOfChange === 'string' || typeOfChange === 'number')
                                        typeOfChange += ' (' + scope[objectName] +')';
                                changed.push({name: objectName, type: typeOfChange, isParent: isParent});
                            }
                        }
                    }
                    $scope.newObjectsScope = changed;
            });
        }
    };
});