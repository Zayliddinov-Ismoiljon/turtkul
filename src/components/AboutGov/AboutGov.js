import { Button, Card, Col, Modal, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AboutGov() {
	const [aboutGov, setAboutGov] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/about_authority/Management/about_gov`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setAboutGov(data));
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

  const [obligation, setObligation] = useState(false);
  
  const showObligation = () => {
		setObligation(true);
	};

	const handleOkObligation = () => {
		setObligation(false);
	};

	const handleCancelObligation = () => {
		setObligation(false);
	};

	return (
		<Card>
			{aboutGov.map((item, i) => (
				<Row gutter={[12, 12]} key={i}>
					<Col span={6}>
						<img width={'100%'} src={item.img} alt='image' />
					</Col>
					<Col span={10}>
						<h3>{item.position}</h3>
						<p style={{ color: 'blue' }}>{item.name}</p>
						<span>{item.E_mail}</span>
						<p>{item.acceptance}</p>
						<Row gutter={[12, 12]}>
							<Col span={12}>
								<Button type='primary' onClick={showModal}>
									Tarjimai hol
								</Button>
								<Modal
									// title='Basic Modal'
									open={isModalOpen}
									onOk={handleOk}
									onCancel={handleCancel}>
									<h3>Tarjimayi hol</h3>
                  <span>Tel: {item.Tel}</span>
                  <p dangerouslySetInnerHTML={{ __html: `${item.about}` }} />
								</Modal>
							</Col>
							<Col span={12}>
								<Button type='primary' onClick={showObligation}>Majburiyatlari</Button>
                <Modal
									// title='Basic Modal'
									open={obligation}
									onOk={handleOkObligation}
									onCancel={handleCancelObligation}>
									<h3>Majburiyatlari</h3>
                  <p dangerouslySetInnerHTML={{ __html: `${item.obligation}` }} />
								</Modal>
							</Col>
						</Row>
					</Col>
				</Row>
			))}
		</Card>
	);
}
