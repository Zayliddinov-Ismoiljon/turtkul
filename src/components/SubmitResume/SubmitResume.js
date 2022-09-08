import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';
import fetch from 'isomorphic-fetch';



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

const { TextArea } = Input;

const SubmitResume = () => {

	const [currentVacancy, setCurrentVacancy] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`http://turtkul4.herokuapp.com/about_authority/Vacancies_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setCurrentVacancy(data);
			});
	}, []);

  // const [postSubmit, setPostSubmit]= useState([])

	// const  onSubmit=(data)=> {
	// 	return fetch('http://turtkul4.herokuapp.com/about_authority/Job_Applications_Model', {
	// 			method: 'POST',
	// 			body: JSON.stringify(data),
	// 			headers: {
	// 					'Content-Type': 'application/json'
	// 			}
	// 	}).then(response => {
	// 			if (response.status >= 200 && response.status < 300) {
	// 					return response;
	// 					// console.log(response);
	// 					// window.location.reload();
	// 				} else {
	// 				 console.log('Somthing happened wrong');
	// 				}
	// 	}).catch(err => err);
	// 	}

	// const onSubmit=(values)=>{
	// 	const options = {
	// 		method: 'POST',
	// 		headers: {
				
	// 		}
	// 	};

	const nations = [
		('another', 'boshqa'),
		('uzbek', "o'zbek"),
		('qaraqalpoq', 'qoraqalpoq'),
		('qirgyiz', "qirg'iz"),
		('tadjik', 'tojik'),
		('turkman', 'turkman'),
		('qazaq', 'qozoq'),
		('tatar', 'tatar'),
		('rus', 'rus'),
		('turk', 'turk'),
	];

	const family_statuses = [
		('uylangan', 'uylangan'),
		('uylanmagan', 'uylanmagan'),
		('turmush_qurgan', 'turmush_qurgan'),
		('turmush_qurmagan', 'turmush_qurmagan'),
		('ajrashgan', 'ajrashgan'),
	];

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Form layout='vertical' onFinish={onSubmit}>
				<Form.Item name='vacancy' label='Бўш иш ўринлари *'>
					<Select>
						{currentVacancy.map((e, i) => (
							<Select.Option key={i} value={e.id}>{e.job}</Select.Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item name='full_name' label='ФИШ *'>
					<Input placeholder='Фамилияси Исми Отасининг исми' />
				</Form.Item>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='birth' label='Дата рождения *'>
							<DatePicker />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='nation' label='Миллатингиз *'>
							<Select>
								{nations.map((e, i) => (
									<Select.Option key={i} value={e}>
										{e}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='family_status' label='Оилавий аҳволингиз *'>
							<Select>
								{family_statuses.map((e, i) => (
									<Select.Option key={i} value={e}>
										{e}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='address' label='Яшаш манзилингиз *'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='address-district' label='Манзил'>
							<Input placeholder='Manzil' />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='address-village'  label=' '>
							<Input placeholder='Manzil' />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='phone' label='Telefon *'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='email' label='E-pochta *'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='ctir' label='СТИР рақамингиз *'>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='educated' label='Маълумотингиз *'>
							<Select>
								<Select.Option value='Oliy'>Oliy</Select.Option>
								<Select.Option value='Orta-maxsus'>O'rta-maxsus</Select.Option>
								<Select.Option value='Orta-malumot'>O'rta malumot</Select.Option>
							</Select>
						</Form.Item>
					</Col>
					<Col span={16}>
						<Form.Item name='specialty' label=' Мутахассислигингиз *'>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='graduated_year' label='Қайси таълим муассасасини тамомлагансиз *'>
							<Input placeholder='Йил' />
						</Form.Item>
					</Col>
					<Col span={16}>
						<Form.Item name='educational_institution' label=' '>
							<Input placeholder='Таълим муассасасини номи' />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={12}>
						<Form.Item name='grateful' label='Ишга киришишдан мамнунмиз'>
							<TextArea rows={5} placeholder='Ушбу банд жуда муҳим! Уни қай даражада қисқа ва мазмунли ёритишингизга қараб, давлат солиқ хизмати тизимида ўрин топишингизда хулоса чиқарилади.'/>
						</Form.Item>
					</Col>
          <Col span={12}>
						<Form.Item name='additional_info' label='Қўшимча маълумотлар'>
							<TextArea rows={5} placeholder=''/>
						</Form.Item>
					</Col>
				</Row>
				<Button htmlType='submit' type='primary'>Jo'natish</Button>
			</Form>
		</>
	);
};

export default () => <SubmitResume />;
