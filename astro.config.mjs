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
			// English lives at the root, Chinese under /zh/. Starlight localizes the
			// sidebar, UI strings, <html lang>, search and hreflang from this; root
			// pages without a zh/ twin fall back to English with a notice.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				zh: { label: '简体中文', lang: 'zh-CN' },
			},
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
			// One sidebar for both locales. Links must not carry a /zh prefix —
			// Starlight injects the current locale itself.
			sidebar: [
				{
					label: 'Tutorials',
					translations: { 'zh-CN': '实用教程' },
					items: [
						{ label: 'Start with one small task', translations: { 'zh-CN': '从一个小任务开始' }, link: '/tutorials/' },
						{ label: 'E-commerce task templates', translations: { 'zh-CN': '外贸、电商任务模板' }, link: '/ecommerce-start/' },
						{ label: 'Reply to a pricing question', translations: { 'zh-CN': '客户问价格，先写一版回复' }, link: '/tutorials/price-reply/' },
						{ label: 'Draft a shipping update', translations: { 'zh-CN': '客户催物流，怎么解释当前进度' }, link: '/tutorials/shipping-reply/' },
						{ label: 'Compare supplier quotes', translations: { 'zh-CN': '把几家供应商放进一张对比表' }, link: '/tutorials/supplier-compare/' },
						{ label: 'Research a potential customer', translations: { 'zh-CN': '客户发来官网，先整理哪些信息' }, link: '/tutorials/company-research/' },
						{ label: 'Google Business Profile services', translations: { 'zh-CN': 'Google 商家档案服务' }, link: '/tutorials/google-business-profile-services/' },
						{ label: 'Acuity appointment types', translations: { 'zh-CN': 'Acuity 预约类型' }, link: '/tutorials/acuity-appointment-catalog/' },
						{ label: 'Gmail reply drafts', translations: { 'zh-CN': 'Gmail 回复草稿' }, link: '/tutorials/gmail-reply-drafts/' },
					],
				},
				{
					label: 'Getting Started',
					translations: { 'zh-CN': '开始使用' },
					items: [
						{ label: 'Introduction', translations: { 'zh-CN': '简介' }, link: '/' },
						{ label: 'Installation', translations: { 'zh-CN': 'Chrome 安装' }, link: '/getting-started/installation/' },
						{ label: 'Install on Edge', translations: { 'zh-CN': 'Edge 安装图解' }, link: '/edge-install/' },
						{ label: 'Ziniao browser status', translations: { 'zh-CN': '紫鸟安装状态' }, link: '/ziniao-install/' },
						{ label: 'Quick Start', translations: { 'zh-CN': '快速上手' }, link: '/getting-started/quick-start/' },
					],
				},
				{
					label: 'Guides',
					translations: { 'zh-CN': '使用指南' },
					items: [
						{ label: 'AI Models & Providers', translations: { 'zh-CN': '模型与服务商' }, link: '/guides/connect-ai-provider/' },
						{ label: 'Use Dassi with Ollama', translations: { 'zh-CN': '搭配 Ollama 使用' }, link: '/guides/ollama/' },
						{ label: 'Set up Ollama for Dassi', translations: { 'zh-CN': '为 Dassi 配置 Ollama' }, link: '/guides/ollama-server-setup/' },
						{ label: 'Your First Task', translations: { 'zh-CN': '第一个任务' }, link: '/guides/first-task/' },
						{ label: 'Using the Sidebar', translations: { 'zh-CN': '使用侧栏' }, link: '/guides/using-the-sidebar/' },
						{ label: 'Voice Dictation', translations: { 'zh-CN': '语音输入' }, link: '/guides/voice-dictation/' },
						{ label: 'Using Projects', translations: { 'zh-CN': '使用项目' }, link: '/guides/projects/' },
						{ label: 'Task Dashboard', translations: { 'zh-CN': '任务面板' }, link: '/guides/task-dashboard/' },
						{ label: 'Browser Automation', translations: { 'zh-CN': '浏览器自动化' }, link: '/guides/browser-automation/' },
						{ label: 'Skills & Context', translations: { 'zh-CN': '技能与上下文' }, link: '/guides/skills-and-context/' },
						{ label: 'File References', translations: { 'zh-CN': '文件引用' }, link: '/guides/file-references/' },
						{ label: 'Persistent Scripts', translations: { 'zh-CN': '持久脚本' }, link: '/guides/user-scripts/' },
						{ label: 'Scheduled Tasks', translations: { 'zh-CN': '定时任务' }, link: '/guides/scheduled-tasks/' },
						{ label: 'Telegram Remote Control', translations: { 'zh-CN': 'Telegram 远程控制' }, link: '/guides/telegram-remote-control/' },
						{ label: 'Automate WhatsApp Web', translations: { 'zh-CN': '自动化 WhatsApp Web' }, link: '/guides/whatsapp/' },
					],
				},
				{
					label: 'Reference',
					translations: { 'zh-CN': '参考' },
					items: [
						{ label: "What's New", translations: { 'zh-CN': '更新日志' }, link: '/reference/whats-new/' },
						{ label: 'Keyboard Shortcuts', translations: { 'zh-CN': '键盘快捷键' }, link: '/reference/keyboard-shortcuts/' },
						{ label: 'Limitations', translations: { 'zh-CN': '已知限制' }, link: '/reference/limitations/' },
						{ label: 'Privacy & Security', translations: { 'zh-CN': '隐私与安全' }, link: '/reference/privacy-and-security/' },
						{ label: 'Plans & Billing', translations: { 'zh-CN': '套餐与计费' }, link: '/reference/plans-and-billing/' },
						{ label: 'Why repeat runs cost less', translations: { 'zh-CN': '为什么重复运行更便宜' }, link: '/reference/cost-and-caching/' },
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
