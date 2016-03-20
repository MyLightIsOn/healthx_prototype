'use strict';

describe('Controller: PayClaimCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var PayClaimCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayClaimCtrl = $controller('PayClaimCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
