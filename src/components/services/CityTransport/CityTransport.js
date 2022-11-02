import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { CityTransportStyled } from './CityTransport.styles';

export default function CityTransport() {
	const [cityTransport, setCityTransport] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}services/Services_Transport`, options)
			.then((response) => response.json())
			.then((data) => {
				setCityTransport(data);
			});
	}, []);
	return (
		<CityTransportStyled>
			<Row gutter={[12, 12]}>
				<Col xs={24} sm={24} md={24} lg={24}>
					<h3 className='city-title'>{cityTransport.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: `${cityTransport.body}` }} />
				</Col>
			</Row>
		</CityTransportStyled>
	);
}
