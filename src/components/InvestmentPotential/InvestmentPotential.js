import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { InvestPotentialStyled } from './InvestmenPotential.styles';

export default function InvestmentPotential() {
	const [potential, setPotential] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Investment_Potential_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setPotential(data);
			});
	}, []);

	return (
		<InvestPotentialStyled>
			<img className='invest-img' src={potential.image} alt='image' />
			<h3 className='invest-title'>{potential.title}</h3>
			<div dangerouslySetInnerHTML={{ __html: `${potential.body}` }} />
		</InvestPotentialStyled>
	);
}
