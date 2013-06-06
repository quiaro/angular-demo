'use strict';

angular.module('dialogs',[
		'history.dialog',
		'go-live.dialog'
	])

	.controller('DialogsCtrl', ['$scope', 'historyDialog', 'goLiveDialog', function ($scope, historyDialog, goLiveDialog) {

	  $scope.showDialog = function showDialog (dialogName) {

	  	switch(dialogName) {
	  		case "history" : 
	  			historyDialog.open();
	  			break;
	  		case "go-live":
	  			goLiveDialog.open();
	  			break;
	  		default:
	  			;
	  	}
	  };

	  $scope.closeDialog = function close (dialogName) { 
	    switch(dialogName) {
	  		case "history" : 
	  			historyDialog.close();
	  			break;
	  		case "go-live":
	  			goLiveDialog.close();
	  			break;
	  		default:
	  			;
	  	}
	  };

	  $scope.anotherList = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	}]);
