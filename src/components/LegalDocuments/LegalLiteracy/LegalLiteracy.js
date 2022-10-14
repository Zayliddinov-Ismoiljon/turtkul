import React, { useEffect, useState } from 'react';

export default function LegalLiteracy() {
	const [legalLiteracy, setLegalLiteracy] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Legal_literacy`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setLegalLiteracy(data));
	}, []);
	return (
		<>
			<h3>{legalLiteracy.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${legalLiteracy.body}` }} />
			<time>{legalLiteracy.date}</time>
		</>
	);
}