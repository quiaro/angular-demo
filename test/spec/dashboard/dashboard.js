'use strict';

describe('Controller: DashboardCtrl', function () {

  var DashboardCtrl, scope, params;

  // load the controller's module
  beforeEach(module('dashboard'));

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();
    params = {
      $scope: scope,
      repo: {
        getList: function getList(filterObj) {
          return [1, 2, 3];
        }
      }
    };
    DashboardCtrl = $controller('DashboardCtrl', params);
  }));

  it('should append a list of recent activity items to the scope', function () {
    scope.getRecentActivity();
    expect(scope.recentActivity).toEqual([1, 2, 3]);
  });

});
