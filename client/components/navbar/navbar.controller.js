'use strict';

class NavbarController {
	//start-non-standard

	isCollapsed = false;
	//end-non-standard

	constructor(Auth, MenuService, $scope) {
		this.isLoggedIn = Auth.isLoggedIn;
		this.isAdmin = Auth.isAdmin;
		this.getCurrentUser = Auth.getCurrentUser;
		this.menu = MenuService.mainMenu();
		this.subMenu = MenuService.subMenu();

		$scope.navActive = false;


		/**
		 * Opens Main Navigation
		 */
		$scope.activeButton = function() {
			$scope.navActive = true;
			$scope.$emit('navClicked', $scope.navActive);
		};

		/**
		 * Opens Sub Navigation and closes Main Navigation
		 */
		$scope.subActiveButton = function() {
			$scope.navActive = false;
			$scope.subNavActive = true;
		};
	}
}

angular.module('healthxApp.navbar')
	.controller('NavbarController', NavbarController);
