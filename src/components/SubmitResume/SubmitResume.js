import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';



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

  const [postSubmit, setPostSubmit]= useState([])

  // const onSubmit=(values){
  //   useEffect(()=>{
  //     const options={
  //       method:'POST',
  //       headers:{}
  //     }
  
  //     fetch(``, options)
  //     .then(response=>response.json())
  //     .then(data=>{setPostSubmit(data); console.log(data);})
  //   })
  //   console.log(values);
  // }

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
							<Select.Option key={i} value={e.job}>{e.job}</Select.Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item name='firstName' label='ФИШ *'>
					<Input placeholder='Фамилияси Исми Отасининг исми' />
				</Form.Item>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='birthday' label='Дата рождения *'>
							<DatePicker />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='nations' label='Миллатингиз *'>
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
						<Form.Item name='familyStatuses' label='Оилавий аҳволингиз *'>
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
						<Form.Item name='tell' label='Telefon *'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='email' label='E-pochta *'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='CTR-Number' label='СТИР рақамингиз *'>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col span={8}>
						<Form.Item name='institution' label='Қайси таълим муассасасини тамомлагансиз *'>
							<Input placeholder='Йил' />
						</Form.Item>
					</Col>
					<Col span={16}>
						<Form.Item name='graduated' label=' '>
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
						<Form.Item name='additional-information' label='Қўшимча маълумотлар'>
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
