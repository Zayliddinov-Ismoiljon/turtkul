import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BASE_URL } from 'api/config';
import { Collapse } from 'antd';
import { VacancyStyled } from './Vacancy.styles';

const { Panel } = Collapse;

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function ActionsInAccordionSummary({ setActiveKey }) {
	const classes = useStyles();

	const [vacancy, setVacancy] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}about_authority/Vacancies_Model`, options)
			.then((response) => response.json())
			.then((data) => {
				setVacancy(data);
			});
	}, []);

	return (
		<div className={classes.root}>
			<Collapse defaultActiveKey={['0']}>
				{vacancy.map((e, i) => (
					<>
						<Panel header={<h4 key={i}>{e.job}</h4>} key={`${i}`}>
							<p className='information'>{e.information}</p>
							<a href='#' onClick={() => setActiveKey('2')}>
								Resume yuborish
							</a>
						</Panel>
					</>
				))}
			</Collapse>
		</div>
	);
}
