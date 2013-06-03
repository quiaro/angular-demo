'use strict';

angular.module('angularDemoApp', [
    'dashboard',
    'dialogs'
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
  });
