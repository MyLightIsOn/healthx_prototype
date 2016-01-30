'use strict';

describe('Navbar', function() {
  var navbarComponent;

  beforeEach(function() {
    navbarComponent = require('./navbar.po');
  });

  it('should not have class active', function() {
    expect(navbarComponent.navbarNav.getAttribute('class')).not.toBe('active');
  });
});
