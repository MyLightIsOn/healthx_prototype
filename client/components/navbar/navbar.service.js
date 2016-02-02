'use strict';

(function() {

	function MenuService() {
		var Menus = {

			mainMenu() {
				var menuItems = [{
					'title': 'Home',
					'state': 'main'
				}, {
					'title': 'Profile Info',
					'state': 'main'
				}];

				return menuItems
			},

			subMenu() {
				var menuItems = [{
					'title': 'Home2',
					'state': 'main'
				}, {
					'title': 'Profile Info2',
					'state': 'main.profile',
					'pageName': 'profile'
				}];

				return menuItems
			}

		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();