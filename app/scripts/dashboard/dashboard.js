'use strict';

angular.module('dashboard', ['dialogs', 'dashboard.services'])

    .controller('DashboardCtrl', function($scope, dashboardService) {

      dashboardService.getRecentActivity().then(function(data) {
        $scope.itemList = data;
      });
});
