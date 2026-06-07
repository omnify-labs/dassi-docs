// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.dassi.ai',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'dassi docs',
			favicon: '/favicon.ico',
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
			},
			expressiveCode: {
				themes: ['starlight-dark'],
				useStarlightUiThemeColors: false,
				styleOverrides: {
					codeBackground: '#1a1a1a',
					codeForeground: '#e5e5e5',
					borderColor: 'transparent',
					borderRadius: '6px',
					codePaddingBlock: '16px',
					codePaddingInline: '20px',
					codeFontSize: '13px',
					frames: {
						frameBoxShadowCssValue: 'none',
					},
				},
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
						{ label: 'AI Models & Providers', link: '/guides/connect-ai-provider/' },
						{ label: 'Your First Task', link: '/guides/first-task/' },
						{ label: 'Using the Sidebar', link: '/guides/using-the-sidebar/' },
						{ label: 'Browser Automation', link: '/guides/browser-automation/' },
						{ label: 'Skills & Context', link: '/guides/skills-and-context/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: "What's New", link: '/reference/whats-new/' },
						{ label: 'Keyboard Shortcuts', link: '/reference/keyboard-shortcuts/' },
						{ label: 'Limitations', link: '/reference/limitations/' },
						{ label: 'Privacy & Security', link: '/reference/privacy-and-security/' },
						{ label: 'Plans & Billing', link: '/reference/plans-and-billing/' },
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
