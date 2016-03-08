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
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'HSA/FSA',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			],
			'subMenuPayment' : [
				{
					'title' : 'Pay A Claim',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Payment Profiles',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			],
			'subMenuContact' : [
				{
					'title' : 'My Contacts',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Messages',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			],
			'subMenuFind' : [
				{
					'title' : 'Find a Doctor',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Find a Pharmacy',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			],
			'subMenuSettings' : [
				{
					'title' : 'Privacy',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Security',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Notifications',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			],
			'subMenuHelp' : [
				{
					'title' : 'FAQ',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				},
				{
					'title' : 'Glossary',
					'state' : 'main.nocontent',
					'pageName' : 'nocontent'
				}
			]
		};

		return Menus;
	}

	angular.module('healthxApp.navbar')
		.factory('MenuService', MenuService);

})();