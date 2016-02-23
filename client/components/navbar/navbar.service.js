'use strict';

(function() {

	function MenuService() {

		var Menus = {

			'mainMenu' : [
				{
					'title' : 'Home',
					'state' : 'main',
					'subNavName' : 'Home'
				},
				{
					'title' : 'Profile Info',
					'state' : 'main',
					'subNavName' : 'Profile'
				},
				{
					'title' : 'Settings',
					'state' : 'main',
					'subNavName' : 'Settings'
				},
			],

			'subMenuProfile' : [
				{
					'title' : 'Profile',
					'state' : 'main.profile',
					'pageName' : 'profile'
				},
				{
					'title' : 'Settings',
					'state' : 'main.settings',
					'pageName' : 'settings'
				}
			],

			'subMenuSettings' : [
				{
					'title' : 'Settings',
					'state' : 'main.settings',
					'pageName' : 'settings'
				},
				{
					'title' : 'Settings',
					'state' : 'main.settings',
					'pageName' : 'settings'
				},
				{
					'title' : 'Settings',
					'state' : 'main.settings',
					'pageName' : 'settings'
				},
				{
					'title' : 'Settings',
					'state' : 'main.settings'
				},
				{
					'title' : 'Settings',
					'state' : 'main.settings'
				}

			]
		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();