'use strict';

angular.module('dialogs',[
		'history.dialog',
		'go-live.dialog'
	])

	.controller('DialogsCtrl', ['$scope', function ($scope) {
	  $scope.anotherList = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	}]);
