'use strict';

angular.module('dashboard', ['dialogs', 'services.repo'])
  .controller('DashboardCtrl', ['$scope', 'repo', function($scope, repo) {

		$scope.getRecentActivity = function getRecentActivity () {

			var filterObj;

			function buildFilterObj () {
				// TO-DO: Build the config object for the specific functionality we're on
				return {};
			}

			filterObj = buildFilterObj();
			
			$scope.recentActivity = repo.getList(filterObj);
		};

	}]);

