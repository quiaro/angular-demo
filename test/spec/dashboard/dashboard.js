'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard'));

  var DashboardCtrl,
      scope,
      params;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, dashboardService) {
    scope = $rootScope.$new();

    spyOn(dashboardService, 'getRecentActivity').andCallThrough();

    params = {
      $scope: scope,
      dashboardService: dashboardService
    };

    DashboardCtrl = $controller('DashboardCtrl', params);


  }));

  it('should have called dashboardService', function() {
    expect(params.dashboardService.getRecentActivity).toHaveBeenCalled();
  });

//  it('should attach an item list to the scope', function () {
//    expect(scope.itemList.length).toBe(3);
//  });
});
