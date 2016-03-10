'use strict';

describe('Controller: DependentidCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var PrimaryidCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimaryidCtrl = $controller('DependentidCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
