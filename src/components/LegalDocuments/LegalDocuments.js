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
			.then((data) => setDocsCategory(data));
	}, []); 

	console.log('docsCategory', docsCategory);

	return (
		<LegalDocumentsStyled>
			<Row gutter={[12, 12]}>
				{docsCategory?.map((item, i) => (
					<Col xs={24} sm={12} md={12} lg={12} key={i}>
						<Link to={`/activity/${item}`}>
							<Card className='document-card'>{item}</Card>
						</Link>
					</Col>
				))}
			</Row>
		</LegalDocumentsStyled>
	);
}


///value key tariqasida bolishi kerak masalan kelayotgan malumot keyda  valueda ozbekcha malumot
