import { Tweet, type TweetProps } from "react-tweet";

export type TweetEmbedTypes = TweetProps & {
	theme?: "light" | "dark";
};

const TweetEmbed = (props: TweetEmbedTypes) => {
	const { theme, ...restProps } = props;

	return (
		<figure data-theme={theme}>
			<Tweet {...restProps} />
		</figure>
	);
};

export default TweetEmbed;
