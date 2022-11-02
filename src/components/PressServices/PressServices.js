import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { PressServicesStyled } from './PressServices.styles';

export default function PressServices() {
	const [pressServices, setPressServices] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}about_authority/models/Press_Service_Model`, options)
			.then((response) => response.json())
			.then((data) => setPressServices(data));
	}, []);

	return (
		<PressServicesStyled>
			<h2 className='services-title'>Matbuot xizmati</h2>
			<Row gutter={[12, 12]}>
				<Col style={{display:'block', marginLeft:'auto', marginRight:'auto'}} xs={24} sm={18} md={18} lg={18}>
					<img className='services-img' src={pressServices.image} alt='images' />
				</Col>
				<Col xs={24} sm={16} md={16} lg={16}>
					<p dangerouslySetInnerHTML={{ __html: `${pressServices.body}` }} />
				</Col>
			</Row>
		</PressServicesStyled>
	);
}
