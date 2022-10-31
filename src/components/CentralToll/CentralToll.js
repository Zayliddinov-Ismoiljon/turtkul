import { Button, Col, Modal, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { CentralTollStyled } from './CentralToll.styles';

export default function CentralToll() {
	const [centralToll, setCentralToll] = useState([]);
	const [openToll, setOpenToll] = useState({
		obligation: null,
	});
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/about_authority/Management/central_tool`, options)
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
		<CentralTollStyled>
			<Modal
				// title='Basic Modal'
				open={openToll?.obligation}
				onCancel={()=>setOpenToll({obligation:null})}
				footer={null}
				>
				<h3>Majburiyatlari</h3>
				<p dangerouslySetInnerHTML={{ __html: `${openToll?.obligation}` }} />
			</Modal>
			{centralToll?.map((item, i) => (
				<Row gutter={[12, 12]} key={i}>
					<Col xs={24} sm={6} md={6} lg={6}>
						<img width={'100%'} src={item.img} alt='image' />
					</Col>
					<Col style={{ marginBottom: '50px' }} xs={24} sm={18} md={18} lg={18}>
						<h4>{item.position}</h4>
						<p>{item.name}</p>
						<a href='tell'>{item.Tel}</a>
						<br />
						<a href={`mailto:${item.E_mail}`}>{item.E_mail}</a>
						<br />
						<Button
							className='centralTollModalBtn'
							style={{ marginTop: '10px' }}
							type='primary'
							onClick={()=> setOpenToll({obligation: item.obligation})}>
							Majburiyatlari
						</Button>
					</Col>
				</Row>
			))}
		</CentralTollStyled>
	);
}
