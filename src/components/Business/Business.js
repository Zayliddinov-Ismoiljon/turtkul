import React, { useEffect, useState } from 'react';

export default function Business() {
	const [business, setBusiness] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Entrepreneurship_Business_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setBusiness(data));
	}, []);
	return (
		<>
			<img src={business.image} alt='image' />
			<h3>{business.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${business.body}` }} />
			<time>{business.date}</time>
		</>
	);
}
