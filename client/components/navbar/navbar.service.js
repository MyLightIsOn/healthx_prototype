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
					'title' : 'ID Card',
					'state' : 'main',
					'subNavName' : 'ID'
				},
				{
					'title' : 'Plan Overview',
					'state' : 'main',
					'subNavName' : 'Overview'
				},
				{
					'title' : 'Payment Portal',
					'state' : 'main',
					'subNavName' : 'Payment'
				},
				{
					'title' : 'Contact',
					'state' : 'main',
					'subNavName' : 'Contact'
				},
				{
					'title' : 'Find',
					'state' : 'main',
					'subNavName' : 'Find'
				},
				{
					'title' : 'Settings',
					'state' : 'main',
					'subNavName' : 'Settings'
				},
				{
					'title' : 'Help',
					'state' : 'main',
					'subNavName' : 'Help'
				}
			],

			'subMenuProfile' : [
				{
					'title' : 'Primary Member Info',
					'state' : 'main.primary',
					'pageName' : 'primary'
				},
				{
					'title' : 'Dependents',
					'state' : 'main.dependents',
					'pageName' : 'dependents'
				}
			]
		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();