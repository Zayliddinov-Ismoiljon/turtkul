import { Col, Empty, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderNewsItemWrapper } from './header.styles';

const HeaderNewsItem = ({ news }) => {
	return (
		<>
			{news?.length ? (
				<HeaderNewsItemWrapper>
					<Row gutter={[12, 12]}>
						<Col span={12}>
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
								<p>{news[0]?.date}</p>
							</div>
						</Col>
						<Col span={12}>
							<Row gutter={[12, 12]}>
								{news?.slice(0, 5).map((item, i) => i > 0 && (
											<Col span={12} key={i}>
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
													<p>{item?.date}</p>
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
