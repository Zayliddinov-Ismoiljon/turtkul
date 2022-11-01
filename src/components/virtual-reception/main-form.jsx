import React, { useEffect, useState } from 'react';
import { MainFormWrapper, Textarea } from './virtual-reception.styles';
import fetch from 'isomorphic-fetch';
import { BASE_URL } from 'api/config';
import { Col, Input, message, Row, Button, Form, Space } from 'antd';

const MainForm = () => {
	const [form] = Form.useForm();

	const [postSubmit, setPostSubmit] = useState([]);
	const onSubmit = (values) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		};
		fetch(`${BASE_URL}services/Services_Appeal`, options)
			.then((response) => response.json())
			.then((data) => {
				setPostSubmit(data);
				form.resetFields();
				success();
			});
	};

	const success = () => {
		message.success('Arizangiz yuborildi');
	};

	return (
		<Form layout='vertical' form={form} onFinish={onSubmit} method='POST'>
			<Row gutter={[12, 12]}>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='first_name' label='First Name'>
						<Input placeholder='fisrt name' />
					</Form.Item>
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='last_name' label='Last name Name'>
						<Input placeholder='last name' />
					</Form.Item>
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='email' label='Email'>
						<Input type='email' placeholder='email' />
					</Form.Item>
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='number' label='Number'>
						<Input type='number' placeholder='number' />
					</Form.Item>
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='address' label='Address'>
						<Textarea
							style={{ width: '100%', height: '100px' }}
							placeholder='address'
						/>
					</Form.Item>
				</Col>
				<Col xs={24} sm={12} md={12} lg={12}>
					<Form.Item name='body' label='Body'>
						<Textarea
							style={{ width: '100%', height: '100px' }}
							placeholder='body'
						/>
					</Form.Item>
				</Col>
			</Row>

			<Space>
      <Button htmlType='submit' type='primary'>
				Jo'natish
			</Button>
      </Space>
		</Form>
	);
};

export default MainForm;
