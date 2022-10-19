import { Button, Card, Col, Modal, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';

export default function ManageOrganization() {
	const [manageOrganization, setManageOrganization] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}about_authority/Management/manage_organization`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setManageOrganization(data));
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
			{manageOrganization.map((item, i) => (
				<Row gutter={[12, 12]} key={i}>
					<Col span={6}>
						<img width={'100%'} src={item.img} alt='image' />
					</Col>
					<Col span={18}>
						<h3>{item.position}</h3>
						<span>{item.name}</span>
						<p>Telefon: {item.Tel}</p>
						<p>E-pochta manzili: {item.E_mail}</p>
						<p>Qabul kunlari : {item.acceptance}</p>
						<Button type='primary' onClick={showModal}>
							Majburiyatlari
						</Button>
						<Modal
							// title='Basic Modal'
							open={isModalOpen}
							onOk={handleOk}
							onCancel={handleCancel}>
							<h3>Majburiyatlari</h3>
							<p dangerouslySetInnerHTML={{ __html: `${item.about}` }} />
						</Modal>
					</Col>
				</Row>
			))}
		</>
	);
}
