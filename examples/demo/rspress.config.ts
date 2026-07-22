import path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginThirdParties } from "rspress-plugin-third-parties/plugin";

export default defineConfig({
	root: path.join(__dirname, "docs"),
	title: "Rspress Third Parties Demo",
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
		],
	},
	plugins: [
		pluginThirdParties({
			googleAnalytics: {
				gaId: "",
			},
		}),
	],
});
