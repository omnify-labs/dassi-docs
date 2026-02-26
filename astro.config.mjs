// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.dassi.ai',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'dassi docs',
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'script',
					content: `
						localStorage.setItem('starlight-theme', 'light');
						document.documentElement.dataset.theme = 'light';
					`,
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Installation', link: '/getting-started/installation/' },
						{ label: 'Quick Start', link: '/getting-started/quick-start/' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Connect Your AI Provider', link: '/guides/connect-ai-provider/' },
						{ label: 'Your First Task', link: '/guides/first-task/' },
						{ label: 'Using the Sidebar', link: '/guides/using-the-sidebar/' },
					],
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/omnify-labs/dassi-docs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/G6K58Q7xmj' },
			],
		}),
	],
});
