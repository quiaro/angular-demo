'use strict';

angular.module('dashboard', ['dialogs', 'services.repo'])

    .controller('DashboardCtrl', ['$scope', 'repo', function($scope, repo) {

    // Get Recent Activity data    
    repo.list().success(function(data) {
        $scope.recentActivity = data;
    }).error(function(data) {
        alert('Error: call to repo.list service failed');
    });

}]);
