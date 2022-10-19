import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';

export default function PublicCouncil() {
	const [publicCouncil, setPublicCouncil] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Public_Council_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPublicCouncil(data));
	}, []);
	return (
		<>
			<img src={publicCouncil.image} alt='image' />
			<h3>{publicCouncil.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${publicCouncil.body}` }} />
			<time>{publicCouncil.date}</time>
		</>
	);
}
