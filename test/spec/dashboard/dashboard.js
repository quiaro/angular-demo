'use strict';

describe('Controller: DashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboard'));

  var DashboardCtrl,
      scope,
      params,
      repoSpy,
      testRepoData;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    testRepoData = [];

    //setup a spy on the repository so that the list function can be mocked.
    repoSpy = jasmine.createSpyObj('repo', ['list']);

    //the mock of the list function has to return something that looks like
    //an HttpPromise.
    repoSpy.list.andCallFake(function() {
      var ret = {};
      ret.success = function(method) {
        method.call(null, testRepoData);
        return ret;
      };

      ret.error = function() {
        return ret;
      };

      return ret;
    });

    params = {
      $scope: scope,
      repo: repoSpy
    };

    DashboardCtrl = $controller('DashboardCtrl', params);
  }));

  it('should have called repo list', function() {
    expect(params.repo.list).toHaveBeenCalled();
  });

  it('should have set the scope values', function() {
    expect(scope.recentActivity).toBe(testRepoData);
  });
//  it('should attach an item list to the scope', function () {
//    expect(scope.itemList.length).toBe(3);
//  });
});
