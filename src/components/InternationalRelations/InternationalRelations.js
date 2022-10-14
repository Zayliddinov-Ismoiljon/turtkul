import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function InternationalRelations() {
	const [internationalRelations, setInternationalRelations] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/International_Relations_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setInternationalRelations(data));
	}, []);
	
	return (
		<Row gutter={[12, 12]}>
			{internationalRelations.map((item, i) => (
				<Col span={6} key={i}>
					<Card>
						<Link to={`/activity/relation/${item?.id}`}>
						<img width={'100%'} src={item.image} alt='image' />
						</Link>
						<h4>{item.title}</h4>
					</Card>
				</Col>
			))}
		</Row>
	);
}
