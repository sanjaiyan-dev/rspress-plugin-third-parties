import path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginThirdParties } from "rspress-plugin-third-parties/plugin";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Rspress Third Parties Demo",
	base: "/rspress-plugin-third-parties/",
	llms: true,
	description: "Live interactive playground for rspress-plugin-third-parties",
	icon: "https://avatars.githubusercontent.com/u/88643231",
	logo: {
		light: "https://avatars.githubusercontent.com/u/88643231",
		dark: "https://avatars.githubusercontent.com/u/88643231",
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content:
					"https://github.com/sanjaiyan-dev/rspress-plugin-third-parties",
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
