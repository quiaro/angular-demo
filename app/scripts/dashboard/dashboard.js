'use strict';

angular.module('dashboard', ['dialogs', 'services.repo'])

    .controller('DashboardCtrl', ['$scope', 'repo', '$window', function($scope, repo, $window) {

    // Get Recent Activity data    
    repo.list().success(function(data) {
        $scope.recentActivity = data;
    }).error(function() {
        $window.alert('Error: repo.list service failed');
    });

}]);
