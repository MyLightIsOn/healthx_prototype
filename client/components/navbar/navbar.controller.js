'use strict';

class NavbarController {
	//start-non-standard

	isCollapsed = false;
	//end-non-standard

	constructor(Auth, MenuService, $scope) {
		this.isLoggedIn = Auth.isLoggedIn;
		this.isAdmin = Auth.isAdmin;
		this.getCurrentUser = Auth.getCurrentUser;
		this.menu = MenuService.mainMenu()

		$scope.isActive = false;
		$scope.activeButton = function() {
			$scope.isActive = !$scope.isActive;
			$scope.$emit('navClicked', $scope.isActive);
		};
	}
}

angular.module('healthxApp.navbar')
	.controller('NavbarController', NavbarController);
