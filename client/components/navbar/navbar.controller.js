'use strict';

class NavbarController {
	//start-non-standard

	isCollapsed = false;
	//end-non-standard

	constructor(Auth, MenuService, $scope) {
		this.isLoggedIn = Auth.isLoggedIn;
		this.isAdmin = Auth.isAdmin;
		this.getCurrentUser = Auth.getCurrentUser;
		this.menu = MenuService.mainMenu;
		this.subMenu = MenuService.subMenuProfile;

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
		$scope.subActiveButton = function($event) {
			var targetName = $event.target.attributes[1].textContent;

			$scope.createSubNav(targetName);

			$scope.navActive = false;
			$scope.subNavActive = true;
		};

		$scope.createSubNav = function(targetName){
			var newSubMenu =  'subMenu' + targetName;
			$scope.$parent.nav.subMenu = MenuService[newSubMenu];
		};

		/**
		 * Closes All Navigation
		 */
		$scope.closeMenu = function() {
			$scope.navActive = false;
			$scope.subNavActive = false;
			$scope.$emit('navClosed', $scope.navActive);
		};

		/**
		 * Closes Sub Navigation
		 */
		$scope.menuBack = function() {
			$scope.navActive = true;
			$scope.subNavActive = false;
		};

		/**
		 * Opens Selected Page
		 */
		$scope.openPage = function($event){
			/*event.preventDefault();*/
			$scope.$emit('pageSelected', $event.target.getAttribute("data-link-name"));
			$scope.closeMenu();
		}
	}
}

angular.module('healthxApp.navbar')
	.controller('NavbarController', NavbarController);
