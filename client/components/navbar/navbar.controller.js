'use strict';

class NavbarController {
	//start-non-standard

	isCollapsed = false;
	//end-non-standard

	constructor(Auth, MenuService, $scope, $state) {
		this.isLoggedIn = Auth.isLoggedIn;
		this.isAdmin = Auth.isAdmin;
		this.getCurrentUser = Auth.getCurrentUser;
		this.menu = MenuService.mainMenu;
		this.subMenu = MenuService.subMenuProfile;

		$scope.navActive = false;
		let menuButton;

		/**
		 * Opens Main Navigation
		 */
		$scope.activeButton = function($event) {
			/*$scope.activeButton = $scope.closeMenu;*/
			if($event.currentTarget.classList.contains('active')){
				$event.currentTarget.classList.remove('active');
				$scope.closeMenu()
			} else {
				$event.currentTarget.className += ' active';
				menuButton = $event.currentTarget;
				$scope.navActive = true;
				$scope.$emit('navClicked', $scope.navActive);
			}
		};

		/**
		 * Opens Sub Navigation and closes Main Navigation
		 */
		$scope.subActiveButton = function($event) {
			var targetName = $event.target.attributes[1].textContent;

			if(targetName === 'Home'){
				$scope.closeMenu();
				$scope.goHome();
			} else {
				$scope.createSubNav(targetName);
			}
		};

		$scope.createSubNav = function(targetName){
			var newSubMenu =  'subMenu' + targetName;

			$scope.navActive = false;
			$scope.subNavActive = true;
			$scope.$parent.nav.subMenu = MenuService[newSubMenu];
		};

		/**
		 * Returns to Home
		 */
		$scope.goHome = function(){
			$scope.$emit('backHome');
			$state.go('main');
		};

		/**
		 * Closes All Navigation
		 */
		$scope.closeMenu = function() {
			$scope.navActive = false;
			$scope.subNavActive = false;
			$scope.$emit('navClosed', $scope.navActive);
			menuButton.classList.remove('active');
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
			$scope.$emit('pageSelected', $event.target.getAttribute('data-link-name'));
			$scope.closeMenu();
		};
	}
}

angular.module('healthxApp.navbar')
	.controller('NavbarController', NavbarController);
