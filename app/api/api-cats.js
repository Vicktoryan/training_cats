angular.module('api-application', []).factory('apiCats', function(){
	return {
		cats: [{
			name: 'cat 1',
			img: 'app/component/cat-components/img/cat_01.jpg'
		}, {
			name: 'cat 2',
			img: 'app/component/cat-components/img/cat_02.jpg'
		}, {
			name: 'cat 3',
			img: 'app/component/cat-components/img/cat_03.jpg'
		}, {
			name: 'cat 4',
			img: 'app/component/cat-components/img/cat_04.jpg'
		}, {
			name: 'cat 5',
			img: 'app/component/cat-components/img/cat_05.jpg'
		}]
	}
});