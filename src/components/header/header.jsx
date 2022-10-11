import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import HeaderNewsItem from './header-news-item';
import Divider from '@mui/material/Divider';
import { Wrapper } from './header.styles';
import Skeleton from '@mui/material/Skeleton';
import HeaderNews from './HeaderNews/HeaderNews';

const Header = () => {
	const [news, setNews] = useState([]);
	const [pending, setPending] = useState(false);

	useEffect(() => {
		setPending(true);
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`https://turtkul41.herokuapp.com/authority_news/last`, options)
			.then((response) => response.json())
			.then((data) => {
				setNews(data.uz);
				setPending(false);
			});
	}, []);

	// console.log('news===>>>', news);

	return (
		<Wrapper>
			{pending ? (
				<Grid container spacing={4}>
					<Grid item xs={12} sm={7} md={6}>
						<br />
						<Divider />
						<br />
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height='400px'
						/>
					</Grid>
					<Grid item xs={12} sm={5} md={3}>
						<br />
						<Divider />
						<br />
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height='400px'
						/>
						<br />
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height='400px'
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={3}>
						<br />
						<Divider />
						<br />
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height='400px'
						/>
						<br />
						<Skeleton
							animation='wave'
							variant='rectangular'
							width='100%'
							height='400px'
						/>
					</Grid>
				</Grid>
			) : (
				<HeaderNewsItem news={news} />
			)}
		</Wrapper>
	);
};

export default Header;
