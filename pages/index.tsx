import React, {CSSProperties} from 'react';

import Head from 'next/head';
import 'modern-normalize/modern-normalize.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faTwitch,
	IconDefinition,
	faTwitter,
	faGithub,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const ICON_SIZE = 50;

type IconLinkConfig = [IconDefinition, string];
type ImageLinkConfig = [string, string];

const iconLinks: IconLinkConfig[] = [
	[faTwitch, 'www.twitch.tv/hoishin'],
	[faTwitter, 'twitter.com/hoishinxii'],
	[faGithub, 'github.com/hoishin'],
	[faYoutube, 'www.youtube.com/channel/UCRTWpFlTJCC613pNSIf3RKQ'],
];

const imageLinks: ImageLinkConfig[] = [
	['speedrun.com.webp', 'www.speedrun.com/user/Hoishin'],
	['nico.webp', 'com.nicovideo.jp/community/co3256521'],
];

const iconStyle: CSSProperties = {
	height: ICON_SIZE,
	width: ICON_SIZE,
};

const imageStyle: CSSProperties = {
	height: ICON_SIZE,
};

const Link: React.StatelessComponent<{url: string}> = ({url, children}) => (
	<a href={`https://${url}`} target="new" style={{color: 'inherit'}}>
		{children}
	</a>
);

const IconLink: React.StatelessComponent<{iconLink: IconLinkConfig}> = ({
	iconLink,
}) => (
	<Link url={iconLink[1]}>
		<FontAwesomeIcon icon={iconLink[0]} style={iconStyle} />
	</Link>
);

const ImageLink: React.StatelessComponent<{imageLink: ImageLinkConfig}> = ({
	imageLink,
}) => (
	<Link url={imageLink[1]}>
		<img src={`/static/${imageLink[0]}`} style={imageStyle} />
	</Link>
);

const Index: React.StatelessComponent = () => (
	<div>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<link
				rel="shortcut icon"
				type="image/jpeg"
				href="/static/hoisin-sauce.jpeg"
			/>
			<title>Hoishin</title>
			<style>{`
				#container {
					display: grid;
					align-content: center;
					justify-content: center;
					justify-items: center;
				}
			`}
			</style>
		</Head>
		<div id="container">
			<h1>Hoishin</h1>
			<ul>
				<li>Name: Keiichiro Amemiya</li>
				<li>Place: Tokyo, Japan</li>
				<li>
					Speedrunner, have run for{' '}
					<a href="https://youtu.be/WhPP3IGYvLg">RPGLB2017</a>
				</li>
				<li>
					Tech Staff for{' '}
					<a href="https://rtainjapan.net/">RTA in Japan</a>,{' '}
					<a href="https://twitter.com/japanrestream">
						Japanese Restream
					</a>
				</li>
				<li>Front-end engineer at Dwango</li>
				<li>
					Experience: TypeScript, React, Vue, Ruby on Rails,
					PostgreSQL
				</li>
			</ul>
			{iconLinks.map(iconLink => (
				<IconLink iconLink={iconLink} />
			))}
			{imageLinks.map(imageLink => (
				<ImageLink imageLink={imageLink} />
			))}
		</div>
	</div>
);

export default Index;
