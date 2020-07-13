module.exports = {
	title: 'Prifina Dev',
	description: 'Prifina Developer Documentation',
	themeConfig: {
		logo: '/img/logo.svg',
		nav: [
			{ text: 'Home', link: 'https://www.prifina.com/' },
			{
				text: 'Community',
				items: [
					{ text: 'Github', link: 'https://github.com/libertyequalitydata' },
					{ text: 'Slack', link: 'https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ' }
				]
			}
		],
		sidebar: [
			{
				title: 'About Prifina',
				path: '/'
			},
			'/quickstart/',
			{
				title: 'Data Access',
				path: '/data/',
				collapsable: false,
				children: [
					'/data/aggregated/'
				]
			},
			'/glossary/',
		],
	    sidebarDepth: 1,
	}
}
