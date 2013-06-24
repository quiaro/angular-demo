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
    // In real life, when the UI loads, siteName will be passed as a parameter in the URL
    util.setS2dioProperty('siteName', 'pebbles');
  });
