'use strict';

(function() {

	function MenuService() {

		var Menus = {

			'mainMenu' : [
				{
					'title' : 'Home',
					'state' : 'main',
					'subNavName' : 'Home',
					'image' : '../assets/images/Home.png'
				},
				{
					'title' : 'Profile Info',
					'state' : 'main',
					'subNavName' : 'Profile',
					'image' : '../assets/images/Home.png'
				},
				{
					'title' : 'ID Card',
					'state' : 'main',
					'subNavName' : 'ID',
					'image' : '../assets/images/IDCard.png'
				},
				{
					'title' : 'Plan Overview',
					'state' : 'main',
					'subNavName' : 'Overview',
					'image' : '../assets/images/PlanOverview.png'
				},
				{
					'title' : 'Payment Portal',
					'state' : 'main',
					'subNavName' : 'Payment',
					'image' : '../assets/images/Home.png'
				},
				{
					'title' : 'Contact',
					'state' : 'main',
					'subNavName' : 'Contact',
					'image' : '../assets/images/Contact.png'
				},
				{
					'title' : 'Find',
					'state' : 'main',
					'subNavName' : 'Find',
					'image' : '../assets/images/Finder.png'
				},
				{
					'title' : 'Settings',
					'state' : 'main',
					'subNavName' : 'Settings',
					'image' : '../assets/images/Settings.png'
				},
				{
					'title' : 'Help',
					'state' : 'main',
					'subNavName' : 'Help',
					'image' : '../assets/images/Help.png'
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
			],

			'subMenuID' : [
				{
					'title' : 'Primary ID',
					'state' : 'main.primaryid',
					'pageName' : 'primaryid'
				},
				{
					'title' : 'Dependents ID',
					'state' : 'main.dependentsid',
					'pageName' : 'dependentsid'
				}
			],

			'subMenuOverview' : [
				{
					'title' : 'Plan Info',
					'state' : 'main.planinfo',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Deductable',
					'state' : 'main.dependentsid',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'HSA/FSA',
					'state' : 'main.dependentsid',
					'pageName' : 'nocontent'
				}
			]
		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();