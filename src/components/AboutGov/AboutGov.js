import { Button, Card, Col, Modal, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutGovStyled } from './AboutGov.styles';

export default function AboutGov() {
	const [aboutGov, setAboutGov] = useState([]);
	const [modalData, setModalData] = useState({
		tel: null,
		about: null,
	});

	const [modalObligation, setModalObligation] = useState({
		obligation: null,
	});
	const obj = {
		tel: 78978978,
		about: 'sdsds',
	};

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}about_authority/Management/about_gov`, options)
			.then((response) => response.json())
			.then((data) => {
				setAboutGov(data);
			});
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
		<AboutGovStyled>
			<Modal
				open={modalData?.tel}
				onCancel={() => setModalData({ tel: null, about: null })}
				footer={null}>
				<h3>Tarjimayi hol</h3>
				<span>Tel:{modalData?.tel}</span>
				<p dangerouslySetInnerHTML={{ __html: `${modalData?.about}` }} />
			</Modal>
			<Modal
				// title='Basic Modal'
				open={modalObligation?.obligation}
				onOk={handleOkObligation}
				onCancel={()=>setModalObligation({obligation:null})}
				footer={null}
				>
				<h3>Majburiyatlari</h3>
				<p dangerouslySetInnerHTML={{ __html: `${modalObligation?.obligation}` }} />
			</Modal>
			<Card className='aboutCard'>
				{aboutGov.map((item, i) => (
					<Row
						style={{ border: 'none' }}
						className='aboutRow'
						gutter={[12, 12]}
						key={i}>
						<Col xs={24} sm={12} md={6} lg={6}>
							<img width={'100%'} src={item.img} alt='image' />
						</Col>
						<Col xs={24} sm={12} md={10} lg={10}>
							<h3>{item.position}</h3>
							<p style={{ color: 'blue' }}>{item.name}</p>
							<a href={`mailto:${item.E_mail}`}>{item.E_mail}</a>
							<p>{item.acceptance}</p>
							<Row gutter={[12, 12]}>
								<Col xs={24} sm={8} md={8} lg={8}>
									<Button
										className='aboutModalBtn'
										type='primary'
										onClick={() =>
											setModalData({ tel: item?.Tel, about: item?.about })
										}>
										Tarjimai hol
									</Button>
								</Col>
								<Col xs={24} sm={6} md={6} lg={6}>
									<Button
										className='aboutModalBtn'
										type='primary'
										onClick={()=>setModalObligation({obligation: item?.obligation})}>
										Majburiyatlari
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				))}
			</Card>
		</AboutGovStyled>
	);
}
