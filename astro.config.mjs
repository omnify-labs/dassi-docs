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
				Header: './src/components/Header.astro',
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
				{ label: '教程 / Tutorials', items: [
					{ label: '中文实用教程', link: '/zh/tutorials/' },
					{ label: 'English tutorials', link: '/tutorials/' },
					{ label: 'Google Business Profile services', link: '/tutorials/google-business-profile-services/' },
					{ label: 'Acuity appointment types', link: '/tutorials/acuity-appointment-catalog/' },
					{ label: 'Gmail reply drafts', link: '/tutorials/gmail-reply-drafts/' },
					{ label: '客户问价格，先写一版回复', link: '/zh/tutorials/price-reply/' },
					{ label: '客户催物流，怎么解释当前进度', link: '/zh/tutorials/shipping-reply/' },
					{ label: '把几家供应商放进一张对比表', link: '/zh/tutorials/supplier-compare/' },
					{ label: '客户发来官网，先整理哪些信息', link: '/zh/tutorials/company-research/' },
				] },
				{ label: '中文上手', items: [
					{ label: 'Edge 安装图解', link: '/zh/edge-install/' },
					{ label: '紫鸟安装状态', link: '/zh/ziniao-install/' },
					{ label: '外贸、电商任务模板', link: '/zh/ecommerce-start/' },
				] },
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
						{ label: 'Use Dassi with Ollama', link: '/guides/ollama/' },
						{ label: 'Set up Ollama for Dassi', link: '/guides/ollama-server-setup/' },
						{ label: 'Your First Task', link: '/guides/first-task/' },
						{ label: 'Using the Sidebar', link: '/guides/using-the-sidebar/' },
						{ label: 'Voice Dictation', link: '/guides/voice-dictation/' },
						{ label: 'Using Projects', link: '/guides/projects/' },
						{ label: 'Task Dashboard', link: '/guides/task-dashboard/' },
						{ label: 'Browser Automation', link: '/guides/browser-automation/' },
						{ label: 'Skills & Context', link: '/guides/skills-and-context/' },
						{ label: 'File References', link: '/guides/file-references/' },
						{ label: 'Persistent Scripts', link: '/guides/user-scripts/' },
						{ label: 'Scheduled Tasks', link: '/guides/scheduled-tasks/' },
						{ label: 'Telegram Remote Control', link: '/guides/telegram-remote-control/' },
						{ label: 'Automate WhatsApp Web', link: '/guides/whatsapp/' },
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
						{ label: 'Why repeat runs cost less', link: '/reference/cost-and-caching/' },
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
