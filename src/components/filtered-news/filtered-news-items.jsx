import React, { useEffect, useState } from 'react';
import { NewsItemWrapper, NewsInfo, NewsWrapper } from './filtered-news.styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import NotFound from 'components/not-found/not-found';
import EventIcon from '@mui/icons-material/Event';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FilteredNewsItems = ({ news = [], newsFilter }) => {

	console.log('newsfilter==yy', newsFilter);
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const [filterNews, setFilterNews]=useState([])

	useEffect(()=>{
		const options={
			method:'GET', 
			headers:{}
		}

		fetch(`https://turtkul41.herokuapp.com/${newsFilter}`, options)
		.then(response=>response.json())
		.then(data=>{setFilterNews(data); console.log('data==xxx', data);})
	},[])

	// console.log(news);
	return (
		<NewsWrapper>
			{filterNews?.length ? (
				filterNews.map((news_item, i) => (
					<div data-aos='fade-right' key={i}>
						<Link
							to={
								newsFilter
									? `/${newsFilter}/${news_item.id}`
									: `/news/${news_item.filter}/${news_item.id}`
							}
							key={news_item.id}>
							<NewsItemWrapper role='tabpanel'>
								<Grid
									container
									key={i}
									columnSpacing={2}
									style={{ display: 'flex', alignItems: 'center' }}>
									<Grid item xs={12} sm={6} md={6} lg={6}>
										<img src={news_item.imagesown} alt='' />
									</Grid>
									<Grid item xs={12} sm={6} md={6} lg={6}>
					 					<NewsInfo>
											<h4>{news_item.title}</h4>
											<p
												dangerouslySetInnerHTML={{
													__html: `${news_item.body}`,
												}}
											/>
											<h5>
												<EventIcon /> {news_item.date}
											</h5>
										</NewsInfo>
									</Grid>
								</Grid>
							</NewsItemWrapper>
						</Link>
					</div>
				))
			) : (
				<NotFound />
			)}
		</NewsWrapper>
	);
};

export default FilteredNewsItems;
