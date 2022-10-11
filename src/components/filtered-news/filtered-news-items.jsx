import React, { useEffect, useState } from 'react';
import { NewsItemWrapper, NewsInfo, NewsWrapper } from './filtered-news.styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import NotFound from 'components/not-found/not-found';
import EventIcon from '@mui/icons-material/Event';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FilteredNewsItems = ({ newsAll = [], newsFilter }) => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);



	return (
		<NewsWrapper>
			{newsAll?.length ? (
				newsAll.map((news_item, i) => (
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
