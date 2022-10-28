import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { DecisionsForceStyled } from './DecisionsForce.styles';

export default function DecisionsForce() {
	const [decisionsForce, setDecisionsForce] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Decisions_that_have_lost_their_force`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setDecisionsForce(data));
	}, []);
	return (
		<DecisionsForceStyled>
			<h3 className='force-title'>{decisionsForce.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${decisionsForce.body}` }} />
		</DecisionsForceStyled>
	);
}
