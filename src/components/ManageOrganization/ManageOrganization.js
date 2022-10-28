import { Button, Card, Col, Modal, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { ManageOrganizationStyled } from './ManageOrganization.styles';

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
		<ManageOrganizationStyled>
			{manageOrganization.map((item, i) => (
				<Row gutter={[12, 12]} key={i}>
					<Col xs={24} sm={6} md={6} lg={6}>
						<img width={'100%'} src={item.img} alt='image' />
					</Col>
					<Col xs={24} sm={18} md={18} lg={18}>
						<h3>{item.position}</h3>
						<span>{item.name}</span>
						<p>Telefon: {item.Tel}</p>
						<p>E-pochta manzili: {item.E_mail}</p>
						<p>Qabul kunlari : {item.acceptance}</p>
						<Button className='modalBtn' type='primary' onClick={showModal}>
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
		</ManageOrganizationStyled>
	);
}
