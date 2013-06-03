'use strict';

describe('Controller: DialogsCtrl', function () {

  // load the controller's module
  beforeEach(module('dialogs'));

  var DialogsCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsCtrl = $controller('DialogsCtrl', {
      $scope: scope
    });
  }));

  it('should open a dialogue window', function () {
    expect(scope.anotherList.length).toBe(3);
  });

  it('should close a dialogue window, if one is open', function () {
    expect(scope.anotherList.length).toBe(3);
  });

});
