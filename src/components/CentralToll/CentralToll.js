import { Button, Col, Modal, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CentralToll() {
	const [centralToll, setCentralToll] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}/about_authority/Management/central_tool`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setCentralToll(data));
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{centralToll.map((item, i) => (
				<Row gutter={[12, 12]} key={i}>
					<Col span={6}>
						<img width={'100%'} src={item.img} alt='image' />
					</Col>
					<Col span={18}>
						<h4>{item.position}</h4>
						<p>{item.name}</p>
						<a href='tell'>{item.Tel}</a>
						<br />
						<a href={'mailto :' + item.E_mail}>{item.E_mail}</a>
						<br />
						<Button type='primary' onClick={showModal}>
							Majburiyatlari
						</Button>
						<Modal
							// title='Basic Modal'
							open={isModalOpen}
							onOk={handleOk}
							onCancel={handleCancel}>
							<h3>Majburiyatlari</h3>
							<p dangerouslySetInnerHTML={{ __html: `${item.obligation}` }} />
						</Modal>
					</Col>
				</Row>
			))}
		</>
	);
}
