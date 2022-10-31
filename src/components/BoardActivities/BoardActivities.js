import { Card, Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BoardActivitiesStyled } from './BoardActivities.styles';

export default function BoardActivities() {
	const [boardActivities, setBoardActivities] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/meeting/Meeting_News`, options)
			.then((response) => response.json())
			.then((data) => setBoardActivities(data));
	}, []);
	// console.log('boardActivitiesDetail==>>', boardActivities);
	return (
		<BoardActivitiesStyled>
			<Row gutter={[12,24]} style={{margin:'0'}}>
				{boardActivities.map((item, i) => (
					<Col
						
						xs={24}
						md={6}
						sm={6}
						lg={6}>
							<div className="board-col" 
							style={{
							border: '1px solid silver',
							padding: '5px',
							borderRadius: '5px',
						}}>
						<Link to={`/meeting/board-activities/${item?.id}`}>
							<figure>
								<img
									className='board-img'
									width={'100%'}
									src={item.imagesown}
									alt='image'
								/>
							</figure>
							<h3 className='board-title'>{item.title}</h3>
						</Link>
							</div>
					</Col>
				))}
			</Row>
		</BoardActivitiesStyled>
	);
}
