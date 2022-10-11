import { List, Card, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LegalDocuments() {
	const [docsCategory, setDocsCategory] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Categories/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setDocsCategory(data));
	}, []); 

	return (
		<>
			<Row gutter={[12, 12]}>
				{docsCategory?.map((item, i) => (
					<Col span={12} key={i}>
						<Link to={`/activity/${item}`}>
							<Card>{item}</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
}


///value key tariqasida bolishi kerak masalan kelayotgan malumot keyda  valueda ozbekcha malumot
