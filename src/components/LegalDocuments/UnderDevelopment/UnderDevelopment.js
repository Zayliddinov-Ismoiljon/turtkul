import React, { useEffect, useState } from 'react';

export default function UnderDevelopment() {
	const [underDevelopment, setUnderDevelopment] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Discussion_of_NHHs_under_development`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setUnderDevelopment(data));
	}, []);
	return (
		<>
			<h3>{underDevelopment.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${underDevelopment.body}` }} />
			<time>{underDevelopment.date}</time>
		</>
	);
}
