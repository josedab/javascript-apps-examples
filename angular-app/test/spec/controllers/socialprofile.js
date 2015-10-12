'use strict';

describe('Controller: SocialprofileCtrl', function () {

  // load the controller's module
  beforeEach(module('socialprofileApp'));

  var SocialprofileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialprofileCtrl = $controller('SocialprofileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocialprofileCtrl.awesomeThings.length).toBe(3);
  });
});
