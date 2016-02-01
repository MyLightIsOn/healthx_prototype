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
			}

		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();