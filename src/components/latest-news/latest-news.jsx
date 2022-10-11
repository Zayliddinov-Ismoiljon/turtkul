import { Divider } from '@mui/material';
import Title from 'components/title';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchNews,
	getNewsData,
} from 'store/reducer-and-action/news/newsSlice';
import { Wrapper } from './latest-news.style';
import News from './news/news';
import Schedule from './schedule/schedule';

const LatestNews = ({ news, plan }) => {
	const newsData = useSelector(getNewsData);

	const [cityPlan, setCityPlan]= useState();

	useEffect(()=>{
		const options={
			method:'GET', 
			headers:{}
		}

		fetch(`https://turtkul41.herokuapp.com/home/ish_reja/`, options)
		.then(response=>response.json())
		.then(data=>{setCityPlan(data)})
	},[])

	return (
		<Wrapper>
			<div>
				<Title text={news.title} />
				<News newsData={newsData} />
			</div>
			<div>
				<Title text={plan.title} />
				<Schedule data={plan.data} />
			</div>
		</Wrapper>
	);
};

export default LatestNews;
