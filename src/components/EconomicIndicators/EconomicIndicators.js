import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { EconomicIndicatorStyled } from './EconomicIndicator.styles';

export default function EconomicIndicators() {
	const [economicIndicators, setEconomicIndicators] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}/activity/models/Economic_Indicators_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setEconomicIndicators(data));
	}, []);
	return (
		<EconomicIndicatorStyled>
			<img className='economic-img' src={economicIndicators.image} alt='image' />
			<h3 className='economic-title'>{economicIndicators.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${economicIndicators.body}` }} />
		</EconomicIndicatorStyled>
	);
}
