import React, { useState } from 'react';
import ActionsInAccordionSummary from './VacancyItem';
import SubmitResume from '../SubmitResume/SubmitResume';
import { Tabs } from 'antd';

export default function Vacancy() {

	const [activeKey, setActiveKey] = useState('1')

	return (
		<ul className='vacancy__list'>
			<h1>Vacancy page</h1>
			<Tabs defaultActiveKey='1' activeKey={activeKey} onChange={(e)=>setActiveKey(e)}>
				<Tabs.TabPane tab="Ma'lumot" key='1'>
					<ActionsInAccordionSummary setActiveKey={setActiveKey} />
				</Tabs.TabPane>
				<Tabs.TabPane tab='Resume' key='2'>
					<SubmitResume />
				</Tabs.TabPane>
			</Tabs>
		</ul>
	);
}
