'use strict';

angular.module('dashboard', ['dialogs', 'services.repo'])

    .controller('DashboardCtrl', ['$scope', '$window', 'repo', function($scope, $window, repo) {

    // Get Recent Activity data    
    repo.list().success(function(data) {
        $scope.recentActivity = data;
    }).error(function() {
        $window.alert('Error: call to repo.list service failed');
    });

}]);
