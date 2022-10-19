import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useState, useEffect } from 'react';
import Maps from './Maps';

export default function Connection() {
	const [connection, setConnection] = useState({});
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}/about_authority/models/Connection_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setConnection(data);
			});
	}, []);

	return (
		<>
			<h1>Bog'lanish page</h1>
			<Row>
				<Col span={8}>
					{
						<>
							<img
								src={connection.image}
								style={{ width: '300px', height: '200px' }}
								alt='connection img'
							/>
							<h3>{connection.title}</h3>
							<p dangerouslySetInnerHTML={{ __html: `${connection.body}` }} />
							<time>{connection.date}</time>
						</>
					}
				</Col>
				<Col span={16}><Maps/></Col>
			</Row>
		</>
	);
}
