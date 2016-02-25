'use strict';

describe('Controller: DependentsCtrl', function () {

  // load the controller's module
  beforeEach(module('healthxApp'));

  var DependentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DependentsCtrl = $controller('DependentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
