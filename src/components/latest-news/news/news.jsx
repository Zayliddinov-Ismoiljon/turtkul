import Loader from 'components/common/loader/loader';
import { useEffect, useState } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsData } from 'store/data/home-page-data';

import {
	getActiveFilter,
	getNewsStatus,
} from 'store/reducer-and-action/news/newsSlice';
import { CustomPaper, MainBody, Time, Wrapper, Box } from './news.style';

const News = ({ newsData = [] }) => {
	const [news, setNews] = useState(newsData); 
	const [pending, setPending] = useState(true);

	useEffect(() => {
		setPending(true);
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`http://turtkul41.herokuapp.com/authority_news/last`, options)
			.then((response) => response.json())
			.then((data) => {
				setNews(data.uz);
				setPending(false);
			});
	}, []);

	return (
		<CustomPaper elevation={3}>
			{pending ? (
				<Loader />
			) : (
				<Box>
					{news?.map((item, i) => (
						<Link to={`news/${item.filter}`} key={item.id}>
							<SingleNews key={i} time={item.date} title={item.title} />
						</Link>
					))}
				</Box>
			)}
		</CustomPaper>
	);
};

const SingleNews = ({ time, title }) => {
	const truncatedData =
		title.length > 100 ? title.slice(0, 100) + '...' : title;
	return (
		<Wrapper>
			<Time>
				<MdOutlineWatchLater /> {time}
			</Time>
			<MainBody>
				{truncatedData}
				<br />
			</MainBody>
		</Wrapper>
	);
};

export default News;
