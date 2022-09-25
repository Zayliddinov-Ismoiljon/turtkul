import React, { useEffect, useState } from 'react';

export default function EconomicIndicators() {
	const [economicIndicators, setEconomicIndicators] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Economic_Indicators_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setEconomicIndicators(data));
	}, []);
	return (
		<>
			<img src={economicIndicators.image} alt='image' />
			<h3>{economicIndicators.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${economicIndicators.body}` }} />
			<time>{economicIndicators.date}</time>
		</>
	);
}
