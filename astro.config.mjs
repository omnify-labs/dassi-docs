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
					label: 'Use cases',
					translations: { 'zh-CN': '使用场景' },
					items: [
						{
							label: 'Start here',
							translations: { 'zh-CN': '从这里开始' },
							items: [
								{ label: 'Start with one small task', translations: { 'zh-CN': '从一个小任务开始' }, link: '/tutorials/' },
								{ label: 'E-commerce task templates', translations: { 'zh-CN': '外贸、电商任务模板' }, link: '/ecommerce-start/' },
							],
						},
						{
							label: 'Email & messaging',
							translations: { 'zh-CN': '邮件与沟通' },
							collapsed: true,
							items: [
								{ label: 'Reply to a pricing question', translations: { 'zh-CN': '客户问价格，先写一版回复' }, link: '/tutorials/price-reply/' },
								{ label: 'Draft a shipping update', translations: { 'zh-CN': '客户催物流，怎么解释当前进度' }, link: '/tutorials/shipping-reply/' },
								{ label: 'Gmail reply drafts', translations: { 'zh-CN': 'Gmail 回复草稿' }, link: '/tutorials/gmail-reply-drafts/' },
								{ label: 'Turn an email into a calendar event', translations: { 'zh-CN': '把邮件里的约会变成日历事件' }, link: '/tutorials/calendar-button-emails/' },
								{ label: 'Log a LinkedIn message to your CRM', translations: { 'zh-CN': '把 LinkedIn 消息记进 CRM' }, link: '/tutorials/linkedin-message-to-crm/' },
							],
						},
						{
							label: 'Research & comparison',
							translations: { 'zh-CN': '调研与比价' },
							collapsed: true,
							items: [
								{ label: 'Research a potential customer', translations: { 'zh-CN': '客户发来官网，先整理哪些信息' }, link: '/tutorials/company-research/' },
								{ label: 'Compare supplier quotes', translations: { 'zh-CN': '把几家供应商放进一张对比表' }, link: '/tutorials/supplier-compare/' },
								{ label: 'Prepare a brief for a calendar meeting', translations: { 'zh-CN': '为日历上的会议准备一页简报' }, link: '/tutorials/meeting-prep-calendar-panel/' },
								{ label: 'Compare outputs from two AI tools', translations: { 'zh-CN': '比较两个 AI 工具的输出' }, link: '/tutorials/ai-output-comparison/' },
								{ label: 'Check a product\'s price history before buying', translations: { 'zh-CN': '下单前查一下商品的历史价格' }, link: '/tutorials/price-history-injector/' },
								{ label: 'Compare grocery items by cost per unit', translations: { 'zh-CN': '按单位价格比较商品' }, link: '/tutorials/grocery-cost-per-unit/' },
							],
						},
						{
							label: 'Data & reports',
							translations: { 'zh-CN': '数据与报表' },
							collapsed: true,
							items: [
								{ label: 'Total up your Amazon order history', translations: { 'zh-CN': '把 Amazon 订单历史算个总账' }, link: '/tutorials/amazon-spending-dashboard/' },
								{ label: 'Categorize spending on your bank statement', translations: { 'zh-CN': '给银行流水按类别算总' }, link: '/tutorials/bank-statement-categorizer/' },
								{ label: 'Move bank transactions into a Google Sheet', translations: { 'zh-CN': '把银行交易搬进 Google 表格' }, link: '/tutorials/bank-to-sheets-no-export/' },
								{ label: 'Write a weekly update from an analytics dashboard', translations: { 'zh-CN': '从数据面板写一份周报' }, link: '/tutorials/analytics-weekly-summary/' },
								{ label: 'Sort, filter and chart a table on any page', translations: { 'zh-CN': '给网页表格加排序、筛选和图表' }, link: '/tutorials/interactive-html-tables/' },
								{ label: 'Get a Google Sheets formula in plain English', translations: { 'zh-CN': '用一句话要一个 Google 表格公式' }, link: '/tutorials/sheets-formula-suggestions/' },
								{ label: 'Explain a GitHub pull request diff inline', translations: { 'zh-CN': '让 GitHub PR 逐段解释改动' }, link: '/tutorials/github-pr-diff-explainer/' },
							],
						},
						{
							label: 'Reading & learning',
							translations: { 'zh-CN': '阅读与学习' },
							collapsed: true,
							items: [
								{ label: 'Turn an article into flashcards', translations: { 'zh-CN': '把一篇文章变成记忆卡片' }, link: '/tutorials/article-to-flashcards/' },
								{ label: 'Take structured notes from a YouTube video', translations: { 'zh-CN': '从 YouTube 视频整理带时间戳的笔记' }, link: '/tutorials/youtube-structured-notes/' },
								{ label: 'Define the jargon in an academic paper', translations: { 'zh-CN': '给论文里的术语加上下文解释' }, link: '/tutorials/paper-jargon-definitions/' },
								{ label: 'Read a contract in plain language', translations: { 'zh-CN': '用大白话读合同' }, link: '/tutorials/legal-doc-plain-language/' },
								{ label: 'Fact-check the claims in a news article', translations: { 'zh-CN': '核查新闻里的数据说法' }, link: '/tutorials/news-inline-fact-checks/' },
								{ label: 'Make a documentation code sample runnable', translations: { 'zh-CN': '让文档里的代码示例能跑起来' }, link: '/tutorials/docs-interactive-playground/' },
								{ label: 'Scale a recipe and convert its units', translations: { 'zh-CN': '按人数换算菜谱和单位' }, link: '/tutorials/recipe-scaling-conversions/' },
							],
						},
						{
							label: 'Forms & job hunting',
							translations: { 'zh-CN': '表单与求职' },
							collapsed: true,
							items: [
								{ label: 'Fill a job application form from your resume', translations: { 'zh-CN': '用简历填求职申请表' }, link: '/tutorials/application-form-smart-autofill/' },
								{ label: 'Keep your progress on a long web form', translations: { 'zh-CN': '给长表单保住填写进度' }, link: '/tutorials/government-forms-auto-save/' },
								{ label: 'Normalize a page of job listings', translations: { 'zh-CN': '把一页招聘信息整理成统一格式' }, link: '/tutorials/job-listing-normalizer-filters/' },
								{ label: 'Score a job listing against your resume', translations: { 'zh-CN': '用简历给招聘信息打匹配分' }, link: '/tutorials/job-listing-resume-match/' },
							],
						},
						{
							label: 'Business accounts',
							translations: { 'zh-CN': '商家后台' },
							collapsed: true,
							items: [
								{ label: 'Google Business Profile services', translations: { 'zh-CN': 'Google 商家档案服务' }, link: '/tutorials/google-business-profile-services/' },
								{ label: 'Acuity appointment types', translations: { 'zh-CN': 'Acuity 预约类型' }, link: '/tutorials/acuity-appointment-catalog/' },
							],
						},
						{
							label: 'Page tweaks',
							translations: { 'zh-CN': '页面增强' },
							collapsed: true,
							items: [
								{ label: 'Add keyboard shortcuts to a web app', translations: { 'zh-CN': '给网页应用加键盘快捷键' }, link: '/tutorials/keyboard-shortcuts-anywhere/' },
								{ label: 'Apply your reading preferences to any page', translations: { 'zh-CN': '把阅读偏好应用到任何页面' }, link: '/tutorials/universal-accessibility-mode/' },
								{ label: 'Check a booking date against your calendar', translations: { 'zh-CN': '订票前对一下日历冲突' }, link: '/tutorials/travel-booking-calendar-conflicts/' },
							],
						},
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
					label: 'Features',
					translations: { 'zh-CN': '功能说明' },
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
