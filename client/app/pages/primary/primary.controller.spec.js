'use strict';

describe('Controller: PrimaryCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var PrimaryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimaryCtrl = $controller('PrimaryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
