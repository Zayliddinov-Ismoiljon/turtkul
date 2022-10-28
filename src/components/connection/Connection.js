import { Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useState, useEffect } from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { ConnectionStyled } from './Connection.styles';
import Maps from './Maps';

export default function Connection() {
	const [connection, setConnection] = useState({});
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/about_authority/models/Connection_Model`, options)
			.then((response) => response.json())
			.then((data) => {
				setConnection(data);
			});
	}, []);

	return (
		<ConnectionStyled>
			<Row gutter={[12, 12]}>
				<Col xs={24} sm={12} md={12} lg={12}>
			<h3 className='connection-title'>Biz bilan bog'lanish</h3>
					<img
						className='connection-img'
						src={connection.image}
						alt='connection img'
					/>
					<h3 className='connection-heading'>{connection.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: `${connection.body}` }} />
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<YMaps>
						<Map
						width={'100%'}
						height={'400px'}
							defaultState={{
								center: [41.5676679, 61.665974,9],
								zoom: 9,
							}}
						/>
					</YMaps>
				</Col>
			</Row>
		</ConnectionStyled>
	);
}
