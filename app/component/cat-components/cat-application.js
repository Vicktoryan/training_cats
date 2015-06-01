angular.module('cat-application', [])
.filter('showCatsFilter', function(){
	return function(cats, maxCountCatClick){
		return cats.filter(function(cat){
			return !cat.countClick || cat.countClick < maxCountCatClick;
		});
	}
})
.directive('cats', function(apiCats, MAX_COUNT_CLICK_CAT, $filter){
	return {
		scope: true,
		templateUrl: 'app/component/cat-components/cat-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.cats = apiCats.cats;
			$scope.maxCountCatClick = MAX_COUNT_CLICK_CAT;
			$scope.showCats = function(img, name){
				$scope.catImg = img;
				$scope.catName = name;
			}

			$scope.$on('youClickedCat', function(event, cat){
				$scope.$broadcast('dogLookIClickCat', cat);
			});
		}
	};
}).directive('cat', function(){
	return {
		scope: true,
		templateUrl: 'app/component/cat-components/cat.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.clickedOnCat = function(cat){
				console.log($scope.count);
				cat.countClick = (typeof cat.countClick === 'undefined') ? 1 : cat.countClick + 1;
				$scope.$emit('youClickedCat', cat);
			};
		}
	};
});