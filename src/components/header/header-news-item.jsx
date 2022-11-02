import { Col, Empty, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderNewsItemWrapper } from './header.styles';

const HeaderNewsItem = ({ news }) => {

	const toDate=(date)=>new Date(date).toLocaleString('en-US', { day: 'numeric', month: 'numeric',year:"numeric" })

	return (
		<>
			{news?.length ? (
				<HeaderNewsItemWrapper>
					<Row gutter={[12, 12]}>
						<Col md={24} xl={12}>
							<Link to={`news_wiew/${news[0]?.id}`}>
								<figure>
									<img width={'100%'} src={news[0]?.imagesown} alt='news' />
									<figcaption>
										<p>{'Batafsil' || 'More...'}</p>
									</figcaption>
								</figure>
							</Link>
							<div className='card-info'>
								<p>{news[0]?.title}</p>
								<p>{toDate(news[0]?.date)}</p>
							</div>
						</Col>
						<Col md={24} xl={12}>
							<Row gutter={[12, 12]}>
								{news?.slice(0, 5).map((item, i) => i > 0 && (
											<Col xs={24} sm={24} md={24} lg={12} xl={12} key={i}>
												<Link to={`news_wiew/${item?.id}`}>
													<figure>
														<img
															width={'100%'}
															src={item?.imagesown}
															alt='news'
														/>
														<figcaption>
															<p>{'Batafsil' || 'More...'}</p>
														</figcaption>
													</figure>
												</Link>
												<div className='card-info'>
													<p>{item?.title}</p>
													<p>{toDate(item?.date)}</p>
												</div>
											</Col>
										),
								)}
							</Row>
						</Col>
					</Row>
				</HeaderNewsItemWrapper>
			) : (
				<Empty description="malumot yo'q" />
			)}
		</>
	);
};

export default HeaderNewsItem;
