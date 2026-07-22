import { GoogleAnalytics } from "./index";

export default function GlobalGoogleAnalytics() {
	// Rspress/Rsbuild define plugin injects process.env.RSPRESS_GA_CONFIG string
	const configString = process.env.RSPRESS_GA_CONFIG;

	if (!configString || configString === "null") {
		return null;
	}

	const config = JSON.parse(configString);
	return <GoogleAnalytics {...config} />;
}
