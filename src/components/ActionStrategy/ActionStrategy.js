import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { ActionStrategyStyled } from './ActionStrategy.styles';

export default function ActionStrategy() {
	const [strategy, setStrategy] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/activity/models/Action_Strategy_Model/`, options)
			.then((response) => response.json())
			.then((data) => {
				setStrategy(data);
			});
	}, []);

	return (
		<ActionStrategyStyled>
      <h2 className='strategy-title'>Harakatlar strategiyasi</h2>
			<Row gutter={[12, 12]}>
				<Col xs={24} sm={24} md={24} lg={24}>
					<img className='strategy-img' src={strategy.image} alt='image' />
				</Col>
				<Col xs={24} sm={24} md={24} lg={24}>
					<h3>{strategy.title}</h3>
					<div dangerouslySetInnerHTML={{ __html: `${strategy.body}` }} />
				</Col>
			</Row>
		</ActionStrategyStyled>
	);
}
