module.exports = {
	title: 'Prifina Internal',
	description: 'Resources for Working with Prifina',
	themeConfig: {
		logo: '/img/logo.svg',
		nav: [
			{ text: 'Prifina.com', link: 'https://www.prifina.com/' },
			{
				text: 'For Developers',
				items: [
					{ text: 'Developers Main', link: 'https://dev.prifina.com/' },
					{ text: 'Github', link: 'https://github.com/libertyequalitydata' },
					{ text: 'Slack', link: 'prifinadev.slack.com' }
				]
			}
		],
		sidebar: [
			{
				title: 'Prifina, a Summary',
				path: '/'
			},
			
			{
				title: 'Getting Started',
				path: '/getting-started/
			},
			
			{
				title: 'Development Overview',
				path: '/product-development-overview/'
			},
			
					
			{
				title: 'User Stories',
				path: '/user-stories/',	
			},
			
			{
				title: 'Documenting',
				path: '/documenting/',
			},
			
			{
				title: 'Improving Together',
				path: '/contribute/'
			},
			
			
			{
				title: 'Frequently Asked',
				path: '/faq/'
			},
	
		
		],
	    sidebarDepth: 1,
	}
}
