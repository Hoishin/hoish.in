import React from 'react';

import 'modern-normalize/modern-normalize.css';
import '../styles.css';
import Head from 'next/head';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	IconDefinition,
	faTwitter,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

type IconLinkConfig = [IconDefinition, string];
type ImageLinkConfig = [string, string];

const Link: React.StatelessComponent<{url: string}> = ({url, children}) => (
	<a className="no-color" href={`https://${url}`} target="new">
		{children}
	</a>
);

const IconLink: React.StatelessComponent<{iconLink: IconLinkConfig}> = ({
	iconLink,
}) => (
	<Link url={iconLink[1]}>
		<FontAwesomeIcon icon={iconLink[0]} size="4x" />
	</Link>
);

const ImageLink: React.StatelessComponent<{imageLink: ImageLinkConfig}> = ({
	imageLink,
}) => (
	<Link url={imageLink[1]}>
		<img
			src={`/static/${imageLink[0]}`}
			alt={imageLink[1].split('/')[0]}
			className="icon"
		/>
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
			<meta
				name="Description"
				content="Hoishin, Web Engineer, RPG Speedrunner"
			/>
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
			<IconLink iconLink={[faTwitter, 'twitter.com/hoishinxii']} />
			<IconLink iconLink={[faGithub, 'github.com/hoishin']} />
			<ImageLink
				imageLink={[
					'speedrun.com.webp',
					'www.speedrun.com/user/Hoishin',
				]}
			/>
		</div>
	</div>
);

export default Index;
