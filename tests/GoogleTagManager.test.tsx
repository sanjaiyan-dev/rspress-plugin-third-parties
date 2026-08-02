import { page } from "@rstest/browser";
import { render } from "@rstest/browser-react";
import { beforeEach, describe, expect, test } from "@rstest/core";
import { GoogleTagManager } from "../src/components/GoogleTagManager";

describe("GoogleTagManager Component", () => {
	beforeEach(() => {
		// Cleanup scripts from previous test runs
		document
			.querySelectorAll("script[id*='_rspress-gtm']")
			.forEach((script) => script.remove());
		delete (window as any).dataLayer;
		delete (window as any).customDataLayer;
	});

	test("renders GTM initialization and external scripts with default URL", async () => {
		await render(<GoogleTagManager gtmId="GTM-TEST123" />);

		// Wait for React useEffect to attach script tag to DOM
		await page.locator("#_rspress-gtm").waitFor({ state: "attached" });

		const initScript = document.querySelector(
			"#_rspress-gtm-init",
		) as HTMLScriptElement;
		const gtmScript = document.querySelector(
			"#_rspress-gtm",
		) as HTMLScriptElement;

		expect(initScript).not.toBeNull();
		expect(gtmScript).not.toBeNull();
		expect(gtmScript.getAttribute("src")).toBe(
			"https://www.googletagmanager.com/gtm.js?id=GTM-TEST123",
		);
	});

	test("appends gtm_auth, gtm_preview, and custom dataLayerName search parameters", async () => {
		await render(
			<GoogleTagManager
				gtmId="GTM-ADVANCED"
				auth="myAuthCode"
				preview="env-2"
				dataLayerName="customDataLayer"
			/>,
		);

		await page.locator("#_rspress-gtm").waitFor({ state: "attached" });

		const gtmScript = document.querySelector(
			"#_rspress-gtm",
		) as HTMLScriptElement;
		expect(gtmScript).not.toBeNull();

		const url = new URL(gtmScript.src);
		expect(url.searchParams.get("id")).toBe("GTM-ADVANCED");
		expect(url.searchParams.get("gtm_auth")).toBe("myAuthCode");
		expect(url.searchParams.get("gtm_preview")).toBe("env-2");
		expect(url.searchParams.get("gtm_cookies_win")).toBe("x");
		expect(url.searchParams.get("l")).toBe("customDataLayer");
	});

	test("uses custom gtmScriptUrl when provided", async () => {
		await render(
			<GoogleTagManager
				gtmId="GTM-CUSTOM"
				gtmScriptUrl="https://custom-proxy.example.com/gtm.js"
			/>,
		);

		await page.locator("#_rspress-gtm").waitFor({ state: "attached" });

		const gtmScript = document.querySelector(
			"#_rspress-gtm",
		) as HTMLScriptElement;
		expect(gtmScript).not.toBeNull();

		expect(gtmScript.getAttribute("src")).toBe(
			"https://custom-proxy.example.com/gtm.js?id=GTM-CUSTOM",
		);
	});

	test("passes nonce attribute to both script elements when specified", async () => {
		const nonceValue = "random-nonce-12345";

		await render(<GoogleTagManager gtmId="GTM-NONCE" nonce={nonceValue} />);

		await page.locator("#_rspress-gtm").waitFor({ state: "attached" });

		const initScript = document.querySelector(
			"#_rspress-gtm-init",
		) as HTMLScriptElement;
		const gtmScript = document.querySelector(
			"#_rspress-gtm",
		) as HTMLScriptElement;

		expect(initScript).not.toBeNull();
		expect(gtmScript).not.toBeNull();

		expect(initScript.getAttribute("nonce")).toBe(nonceValue);
		expect(gtmScript.getAttribute("nonce")).toBe(nonceValue);
	});

	test("renders init script content with dataLayer initial object", async () => {
		const dataLayerPayload = { user_role: "admin", logged_in: true };

		await render(
			<GoogleTagManager gtmId="GTM-DATALAYER" dataLayer={dataLayerPayload} />,
		);

		await page.locator("#_rspress-gtm-init").waitFor({ state: "attached" });

		const initScript = document.querySelector(
			"#_rspress-gtm-init",
		) as HTMLScriptElement;
		expect(initScript).not.toBeNull();

		expect(initScript.textContent).toContain("w[l]=w[l]||[]");
		expect(initScript.textContent).toContain(JSON.stringify(dataLayerPayload));
	});
});
