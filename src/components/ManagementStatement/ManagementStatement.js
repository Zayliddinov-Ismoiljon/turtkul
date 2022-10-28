import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { StatementStyled } from './ManagementStatement.styles';

export default function ManagementStatement() {
	const [managementStatement, setManagementStatement] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}about_authority/models/Management_Statements_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setManagementStatement(data));
	}, []);

	return (
		<StatementStyled>
			<h3 className='statement-title'>Rahbariyat bayonotlari</h3>
			<Row gutter={[12, 12]}>
				<Col xs={24} sm={4} md={4} lg={4}>
					<img className='statement-img' src={managementStatement.image} alt='image' />
				</Col>
				<Col style={{marginBottom:'30px'}} xs={24} sm={16} md={16} lg={16}>
					<h3>{managementStatement.title}</h3>
					<p
						dangerouslySetInnerHTML={{ __html: `${managementStatement.body}` }}
					/>
				</Col>
			</Row>
		</StatementStyled>
	);
}
