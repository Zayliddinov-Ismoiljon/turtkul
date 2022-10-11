import React, { useEffect, useState } from 'react';

export default function DecisionsForce() {
	const [decisionsForce, setDecisionsForce] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Decisions_that_have_lost_their_force`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setDecisionsForce(data));
	}, []);
	return (
		<>
			<h3>{decisionsForce.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${decisionsForce.body}` }} />
			<time>{decisionsForce.date}</time>
		</>
	);
}
