'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard'));

  var DashboardCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, repo) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope,
      repo: repo
    });
  }));

  // it('should attach an item list to the scope', function () {
  //   expect(scope.recentActivity.length).toBe(3);
  // });
});
