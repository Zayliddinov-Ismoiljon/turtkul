import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import data from 'store/data/static-language-data';
import { GovernmentProgramsStyled } from './GovernmentPrograms.styles';

export default function GovernmentPrograms() {
	const [governmentPrograms, setGovernmentPrograms] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/activity/models/Government_Programs_Model/`, options)
			.then((response) => response.json())
			.then((data) => setGovernmentPrograms(data));
	}, []);

	return (
		<GovernmentProgramsStyled>
			<h2 className='programs-title'>Davlat dasturlari</h2>
			<Row gutter={[12, 12]}>
				<Col style={{ textAlign: 'center' }} xs={24} sm={24} md={24} lg={24}>
					<img
						className='programs-img'
						src={governmentPrograms.image}
						alt='image'
					/>
				</Col>
				<Col xs={24} sm={24} md={24} lg={24}>
					<h3 className='programs-heading'>{governmentPrograms.title}</h3>
					<p
						dangerouslySetInnerHTML={{ __html: `${governmentPrograms.body}` }}
					/>
				</Col>
			</Row>
		</GovernmentProgramsStyled>
	);
}
