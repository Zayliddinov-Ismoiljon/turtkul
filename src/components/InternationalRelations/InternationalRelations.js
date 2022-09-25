import React, { useEffect, useState } from 'react';

export default function InternationalRelations() {
	const [internationalRelations, setInternationalRelations] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/International_Relations_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setInternationalRelations(data));
	}, []);
	return (
		<>
			{internationalRelations.map((item, i) => (
				<div key={i}>
					<img src={item.image} alt='image' />
					<h3>{item.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: `${item.body}` }} />
					<time>{item.date}</time>
				</div>
			))}
		</>
	);
}
