import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
	source: {
		entry: {
			index: "./src/index.ts",
			GlobalGoogleAnalytics: "./src/components/GlobalGoogleAnalytics.tsx",
		},
	},
	lib: [
		{
			format: "esm",
			syntax: "es2022",
			dts: true,
		},
		{
			format: "cjs",
			syntax: "es2022",
			dts: true,
		},
	],
	plugins: [
		pluginReact({
			reactCompiler: true,
		}),
	],
});
