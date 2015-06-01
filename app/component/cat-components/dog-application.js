angular.module('dog-application', []).directive('dog', function(COUNT_CAT_FOR_CRAZY_DOG){
	return {
		scope: true,
		templateUrl: 'app/component/cat-components/dog.html',
		link: function($scope){
			$scope.maxCountCat = COUNT_CAT_FOR_CRAZY_DOG;
			$scope.$on('dogLookIClickCat', function(event, cat){
				$scope.cat = cat;
			});
		}
	}
});