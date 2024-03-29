import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';
import fetch from 'isomorphic-fetch';
import {message, Space } from 'antd';

import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
	Checkbox,
	Upload,
	Row,
	Col,
} from 'antd';
import { BASE_URL } from 'api/config';

const { TextArea } = Input;

const SubmitResume = () => {
	const [form] = Form.useForm();
	const [currentVacancy, setCurrentVacancy] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}about_authority/Vacancies_Model`, options)
			.then((response) => response.json())
			.then((data) => {
				setCurrentVacancy(data);
			});
	}, []);

	const [postSubmit, setPostSubmit] = useState([]);

	const onSubmit = (values) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		};
		fetch(`${BASE_URL}about_authority/Job_Applications_Model`, options)
			.then((response) => response.json())
			.then((data) => {
				setPostSubmit(data);
				form.resetFields();
				success()
			});
	};


	const nations = [
		{ key: 'another', value: 'boshqa' },
		{ key: 'uzbek', value: "o'zbek" },
		{ key: 'qaraqalpoq', value: 'qoraqalpoq' },
		{ key: 'qirgyiz', value: "qirg'iz" },
		{ key: 'tadjik', value: 'tojik' },
		{ key: 'turkman', value: 'turkman' },
		{ key: 'qazaq', value: 'qozoq' },
		{ key: 'tatar', value: 'tatar' },
		{ key: 'rus', value: 'rus' },
		{ key: 'turk', value: 'turk' },
	];

	const family_statuses = [
		{ key: 'uylangan', value: 'uylangan' },
		{ key: 'uylanmagan', value: 'uylanmagan' },
		{ key: 'turmush_qurgan', value: 'turmush_qurgan' },
		{ key: 'turmush_qurmagan', value: 'turmush_qurmagan' },
		{ key: 'ajrashgan', value: 'ajrashgan' },
	];

	const success = () => {
		message.success('Arizangiz yuborildi');
	};
	return (
		<>
			<Form layout='vertical' form={form} onFinish={onSubmit} method='POST'>
				<Form.Item name='vacancies' label='Бўш иш ўринлари *'>
					<Select>
						{currentVacancy.map((e, i) => (
							<Select.Option key={i} value={e.id}>
								{e.job}
							</Select.Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item name='full_name' label='ФИШ *'>
					<Input placeholder='Фамилияси Исми Отасининг исми' />
				</Form.Item>
				<Row gutter={24}>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='birth' label='Дата рождения *'>
							<Input type='date' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='nation' label='Миллатингиз *'>
							<Select>
								{nations.map((item) => (
									<Select.Option key={item.key} value={item.key}>
										{item.value}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='family_status' label='Оилавий аҳволингиз *'>
							<Select>
								{family_statuses.map((item) => (
									<Select.Option key={item.key} value={item.key}>
										{item.value}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='addres' label='Яшаш манзилингиз *'>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='phone' label='Telefon *'>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='email' label='E-pochta *'>
							<Input />
						</Form.Item>
					</Col>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='ctir' label='СТИР рақамингиз *'>
							<Input maxLength={'14'} />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item name='educated' label='Маълумотингиз *'>
							<Select>
								<Select.Option value='highly'>Oliy</Select.Option>
								<Select.Option value='medium_special'>
									O'rta-maxsus
								</Select.Option>
								<Select.Option value='medium'>O'rta malumot</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col xs={24} sm={16} md={16} lg={16}>
						<Form.Item name='specialty' label=' Мутахассислигингиз *'>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={[12, 12]}>
					<Col xs={24} sm={8} md={8} lg={8}>
						<Form.Item
							name='graduated_year'
							label='Қайси таълим муассасасини тамомлагансиз *'>
							<Input placeholder='Йил' type='date' />
						</Form.Item>
					</Col>
					<Col xs={24} sm={16} md={16} lg={16}>
						<Form.Item name='educational_institution' label=' '>
							<Input placeholder='Таълим муассасасини номи' />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col xs={24} sm={12} md={12} lg={12}>
						<Form.Item name='additional_info' label='Қўшимча маълумотлар'>
							<TextArea rows={5} placeholder='' />
						</Form.Item>
					</Col>
				</Row>
				<Space>
				<Button
					htmlType='submit'
					type='primary'>
					Jo'natish
				</Button>
				</Space>
			</Form>
		</>
	);
};

export default () => <SubmitResume />;
