import path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginThirdParties } from "rspress-plugin-third-parties/plugin";

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": ["SoftwareApplication", "SoftwareSourceCode"],
			"@id":
				"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/#software",
			name: "rspress-plugin-third-parties",
			headline:
				"High-performance third-party embeds and non-blocking script strategies for Rspress sites",
			description:
				"High-performance, zero-config Rspress plugin bringing Next.js-style third-party script optimizations (@next/third-parties) to Rspress. Features React Compiler pre-optimization, native React 19 resource pre-initialization (ReactDOM.preinit/preload), requestIdleCallback scheduling, smart memory caching, zero-config global GA4/GTM, and zero-layout-shift facade embeds for YouTube, Google Maps, and Twitter/X.",
			url: "https://sanjaiyan-dev.github.io/rspress-plugin-third-parties",
			codeRepository:
				"https://github.com/sanjaiyan-dev/rspress-plugin-third-parties",
			downloadUrl: "https://www.npmjs.com/package/rspress-plugin-third-parties",
			applicationCategory: "DeveloperApplication",
			operatingSystem: "Cross-platform",
			softwareRequirements: "Node.js >= 18, Rspress >= 1.0.0, React >= 18",
			programmingLanguage: [
				{
					"@type": "ComputerLanguage",
					name: "TypeScript",
				},
				{
					"@type": "ComputerLanguage",
					name: "JavaScript",
				},
			],
			runtimePlatform: ["Node.js", "Rspress", "React 19"],
			license: "https://spdx.org/licenses/MIT",
			isAccessibleForFree: true,
			image:
				"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/rspress-plugin-third-party-hero.png",
			screenshot:
				"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/rspress-plugin-third-party-hero.png",
			keywords:
				"rspress, rspress-plugin, third-parties, web-performance, react-19, next-third-parties, lite-youtube-embed, core-web-vitals, google-analytics, gtm",
			author: {
				"@id": "https://sanjaiyan-dev.github.io/#person",
			},
			maintainer: {
				"@id": "https://sanjaiyan-dev.github.io/#person",
			},
		},
		{
			"@type": "WebSite",
			"@id":
				"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/#website",
			url: "https://sanjaiyan-dev.github.io/rspress-plugin-third-parties",
			name: "rspress-plugin-third-parties Documentation & Demo",
			description:
				"Official documentation and interactive live demo for rspress-plugin-third-parties.",
			inLanguage: "en",
			about: {
				"@id":
					"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/#software",
			},
			publisher: {
				"@id": "https://sanjaiyan-dev.github.io/#person",
			},
			hasPart: [
				{
					"@type": "WebPage",
					"@id":
						"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/demo",
					url: "https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/demo",
					name: "Interactive Demo - rspress-plugin-third-parties",
					description:
						"Live interactive facade embeds for YouTube, Google Maps, Twitter/X, and custom scripts.",
				},
			],
		},
		{
			"@type": "Person",
			"@id": "https://sanjaiyan-dev.github.io/#person",
			name: "Sanjaiyan Parthipan",
			givenName: "Sanjaiyan",
			familyName: "Parthipan",
			birthDate: "2006-04-12",
			birthPlace: {
				"@type": "Place",
				name: "Point Pedro",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Point Pedro",
					addressRegion: "Northern Province",
					addressCountry: "LK",
				},
			},
			nationality: {
				"@type": "Country",
				name: "Sri Lanka",
			},
			url: "https://github.com/sanjaiyan-dev",
			sameAs: [
				"https://github.com/sanjaiyan-dev",
				"https://www.npmjs.com/~sanjaiyan",
				"https://www.instagram.com/sanjaiyan_dev",
			],
			knowsLanguage: ["ta", "en"],
		},
	],
} as const;

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Rspress Third Parties Demo",
	siteOrigin: "https://sanjaiyan-dev.github.io",
	base: "/rspress-plugin-third-parties/",
	llms: true,
	description: "Live interactive playground for rspress-plugin-third-parties",
	icon: "/rspress-plugin-third-party-icon.png",
	logo: "/rspress-plugin-third-party-icon.png",

	builderConfig: {
		html: {
			tags: [
				{
					tag: "meta",
					attrs: {
						property: "og:image",
						content:
							"https://sanjaiyan-dev.github.io/rspress-plugin-third-parties/rspress-plugin-third-party-hero.png",
					},
				},
				{
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: JSON.stringify(jsonLd),
				},
			],
		},
	},
	logoText: "Rspress Plugin Third Parties",
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content:
					"https://github.com/sanjaiyan-dev/rspress-plugin-third-parties",
			},
			{
				icon: "npm",
				mode: "link",
				content: "https://www.npmjs.com/package/rspress-plugin-third-parties",
			},
			{
				icon: "instagram",
				mode: "link",
				content: "https://www.instagram.com/sanjaiyan_dev",
			},
		],
		enableAppearanceAnimation: true,
		enableContentAnimation: true,
	},
	plugins: [
		pluginThirdParties({
			googleAnalytics: {
				gaId: "GA-ID",
			},
		}),
	],
	markdown: {
		link: {
			checkDeadLinks: false,
		},
	},
});
