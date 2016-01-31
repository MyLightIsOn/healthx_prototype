'use strict';

class NavbarController {
	//start-non-standard
	menu = [{
		'title': 'Home',
		'state': 'main'
	}, {
		'title': 'Profile Info',
		'state': 'main'
	}];

	isCollapsed = false;
	//end-non-standard

	constructor(Auth, $scope) {
		this.isLoggedIn = Auth.isLoggedIn;
		this.isAdmin = Auth.isAdmin;
		this.getCurrentUser = Auth.getCurrentUser;

		$scope.isActive = false;
		$scope.activeButton = function() {
			$scope.isActive = !$scope.isActive;
			$scope.$emit('navClicked', $scope.isActive);
		}
	}
}

angular.module('healthxApp')
	.controller('NavbarController', NavbarController);
