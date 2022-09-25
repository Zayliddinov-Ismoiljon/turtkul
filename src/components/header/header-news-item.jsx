import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import { HeaderNewsItemWrapper } from './header.styles';

const HeaderNewsItem = (news) => {
	// const [headNews, setHeadNews]= useState([]);

	// useEffect(()=>{
	// 	const options={
	// 		method:'GET',
	// 		headers:{}
	// 	}

	// 	fetch(`https://turtkul41.herokuapp.com/authority_news/all`, options)
	// 	.then(response=>response.json())
	// 	.then(data=>setHeadNews(data.uz))
	// },[])
	return (
		<>
			{news?.length ? (
				<HeaderNewsItemWrapper>
					{news?.map((item, i) => (
						<div key={i}>
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
						</div>
					))}
				</HeaderNewsItemWrapper>
			) : (
				<Empty description="malumot yo'q" />
			)}
		</>
	);
};

export default HeaderNewsItem;
