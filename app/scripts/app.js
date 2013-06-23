'use strict';

angular.module('angularDemoApp', [
    'dashboard',
    'resources.util'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/dashboard/dashboard.tpl.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  // Initialize the app
  .run(function (util) {
    util.setS2dioProperty('siteName', 'pebbles');
  });
