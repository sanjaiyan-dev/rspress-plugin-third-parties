import { useDark } from "@rspress/core/runtime";
import { Tweet, type TweetProps } from "react-tweet";

export type TweetEmbedTypes = TweetProps & {
	theme?: "light" | "dark";
	caption?: string;
};

export const TweetEmbed = (props: TweetEmbedTypes) => {
	const isDark = useDark();
	const defaultTheme = isDark ? "dark" : "light";
	const { theme = defaultTheme, caption, ...restProps } = props;

	return (
		<figure data-theme={theme}>
			<Tweet {...restProps} />
			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
};
