import React, { useEffect, useState } from 'react';
import { HeaderNewsItemWrapper } from './header.styles';

const HeaderNewsItem = ({ news = [] }) => {
	const [headerNews, setHeaderNews] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`http://turtkul4.herokuapp.com/authority_news/last`, options)
			.then((response) => response.json())
			.then((data) => {
				setHeaderNews(data.uz);
			});
	},[]);

	return (
		<>
			<HeaderNewsItemWrapper>
				{headerNews.slice(0,1).map((item, i) =>  (
					<>
						<figure>
							<img src={item?.imagesown} alt='news' />
							<figcaption>
								<p>{'Batafsil' || 'More...'}</p>
							</figcaption>
						</figure>
						<div className='card-info'>
							<p>{item?.title}</p>
							<p>{item?.date}</p>
						</div>
					</>
				))}
			</HeaderNewsItemWrapper>
		</>
	);
};

export default HeaderNewsItem;
