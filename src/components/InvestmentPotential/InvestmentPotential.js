import React, { useEffect, useState } from 'react';

export default function InvestmentPotential() {
	const [investPotential, setInvestPotential] = useState();
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Investment_Potential_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setInvestPotential(data));
	}, []);

	return (
		<>
			<img src={investPotential.image} alt='image' />
			<h3>{investPotential.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${investPotential.body}` }} />
			<time>{investPotential.date}</time>
		</>
	);
}
