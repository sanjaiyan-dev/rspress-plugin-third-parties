import { GoogleAnalytics } from "./index";

export default function GlobalGoogleAnalytics() {
	// Rspress/Rsbuild define plugin injects process.env.RSPRESS_GA_CONFIG string
	const config = process.env.RSPRESS_GA_CONFIG as any;

	if (!config || !config.gaId) {
		return null;
	}

	return <GoogleAnalytics {...config} />;
}
