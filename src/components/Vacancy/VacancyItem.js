import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BASE_URL } from 'api/config';

import { VacancyStyled } from './Vacancy.styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

export default function ActionsInAccordionSummary({ setActiveKey }) {
	const classes = useStyles();

	///////

	const [vacancy, setVacancy] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}about_authority/Vacancies_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setVacancy(data);
			});
	}, []);

	return (
		<div className={classes.root}>
			{vacancy.map((e, i) => (
				<Accordion className='vacancy-item-accordion' key={i}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-label='Expand'
						aria-controls='additional-actions1-content'
						id='additional-actions1-header'>
						{<h4 key={i}>{e.job}</h4>}
					</AccordionSummary>
					<AccordionDetails>
						<Typography color='textSecondary'>
							<p className='information'>{e.information}</p>
						</Typography>
					</AccordionDetails>
					<AccordionDetails>
						<Typography color='textSecondary'>
							<a href='#' onClick={() => setActiveKey('2')}>
								Resume yuborish
							</a>
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
