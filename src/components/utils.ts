export const requestIdleCallback =
	(typeof self !== "undefined" &&
		self.requestIdleCallback &&
		self.requestIdleCallback.bind(window)) ||
	function (cb: IdleRequestCallback): number {
		let start = Date.now();
		return self.setTimeout(function () {
			cb({
				didTimeout: false,
				timeRemaining: function () {
					return Math.max(0, 50 - (Date.now() - start));
				},
			});
		}, 1);
	};

export const cancelIdleCallback =
	(typeof self !== "undefined" &&
		self.cancelIdleCallback &&
		self.cancelIdleCallback.bind(window)) ||
	function (id: number) {
		return clearTimeout(id);
	};

const DOMAttributeNames: Record<string, string> = {
	acceptCharset: "accept-charset",
	className: "class",
	htmlFor: "for",
	httpEquiv: "http-equiv",
	noModule: "noModule",
};

const ignoreProps = [
	"onLoad",
	"onReady",
	"dangerouslySetInnerHTML",
	"children",
	"onError",
	"strategy",
	"stylesheets",
];

function isBooleanScriptAttribute(
	attr: string,
): attr is "async" | "defer" | "noModule" {
	return ["async", "defer", "noModule"].includes(attr);
}

export function setAttributesFromProps(el: HTMLElement, props: object) {
	for (const [p, value] of Object.entries(props)) {
		if (!Object.prototype.hasOwnProperty.call(props, p)) continue;
		if (ignoreProps.includes(p)) continue;
		if (value === undefined) continue;

		const attr = DOMAttributeNames[p] || p.toLowerCase();
		if (el.tagName === "SCRIPT" && isBooleanScriptAttribute(attr)) {
			(el as HTMLScriptElement)[attr] = !!value;
		} else {
			el.setAttribute(attr, String(value));
		}
		if (
			value === false ||
			(el.tagName === "SCRIPT" &&
				isBooleanScriptAttribute(attr) &&
				(!value || value === "false"))
		) {
			el.setAttribute(attr, "");
			el.removeAttribute(attr);
		}
	}
}
