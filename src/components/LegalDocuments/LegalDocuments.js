import { List, Card, Row, Col } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LegalDocumentsStyled } from './LegalDocuments.styles';

export default function LegalDocuments() {
	const [docsCategory, setDocsCategory] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/categories`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {setDocsCategory(data)});
	}, []); 


	return (
		<LegalDocumentsStyled>
			<Row gutter={[12, 12]}>
				{docsCategory?.map((item, i) => (
					<Col xs={24} sm={12} md={12} lg={12} key={i}>
						<Link to={`/activity/${item.name}`}>
							<Card className='document-card'>{item.title}</Card>
						</Link>
					</Col>
				))}
			</Row>
		</LegalDocumentsStyled>
	);
}
