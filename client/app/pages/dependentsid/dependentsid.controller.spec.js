'use strict';

describe('Controller: DependentsidCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var DependentsidCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DependentsidCtrl = $controller('DependentsidCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
