import { Card, Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { InternationalRelationsStyled } from './InternationalRelations.styles';

export default function InternationalRelations() {
	const [internationalRelations, setInternationalRelations] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/International_Relations_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setInternationalRelations(data));
	}, []);
	
	return (
		<InternationalRelationsStyled>
		<Row gutter={[12, 12]}>
			{internationalRelations.map((item, i) => (
				<Col xs={24} sm={6} md={6} lg={6} key={i}>
					<div style={{border:'1px solid silver', padding:'5px', borderRadius:'5px'}}>
						<Link to={`/activity/relation/${item?.id}`}>
						<img width={'100%'} src={item.image} alt='image' />
						</Link>
						<h4 className='international-title'>{item.title}</h4>
					</div>
				</Col>
			))}
		</Row>
		</InternationalRelationsStyled>
	);
}
