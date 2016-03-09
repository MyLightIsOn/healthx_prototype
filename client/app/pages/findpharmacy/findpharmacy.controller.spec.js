'use strict';

describe('Controller: FindPharmacyCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var PrimaryidCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimaryidCtrl = $controller('FindPharmacyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
