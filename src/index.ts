import path from "node:path";
import { fileURLToPath } from "node:url";
import type { RspressPlugin } from "@rspress/core";

export * from "./components/GoogleAnalytics/index";
export * from "./components/GoogleMapsEmbed";
export * from "./components/GoogleTagManager";
export * from "./components/Script";
export * from "./components/YouTubeEmbed";

export interface ThirdPartiesPluginOptions {
	googleAnalytics?: {
		gaId: string;
		dataLayerName?: string;
		debugMode?: boolean;
		nonce?: string;
	};
}

const getDirname = () => {
	if (typeof __dirname !== "undefined") {
		return __dirname;
	}
	return path.dirname(fileURLToPath(import.meta.url));
};

export function pluginThirdParties(
	options: ThirdPartiesPluginOptions = {},
): RspressPlugin {
	const globalUIComponents = [];

	if (options.googleAnalytics) {
		globalUIComponents.push(
			path.join(getDirname(), "GlobalGoogleAnalytics.js"),
		);
	}

	return {
		name: "rspress-plugin-third-parties",
		globalUIComponents,
		builderConfig: {
			source: {
				define: {
					"process.env.RSPRESS_GA_CONFIG": options.googleAnalytics
						? JSON.stringify(options.googleAnalytics)
						: "null",
				},
			},
		},
	};
}
