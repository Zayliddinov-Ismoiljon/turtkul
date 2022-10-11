import React, { useEffect, useState } from 'react';

export default function LawsRepublicUz() {
	const [lawsRepublicUz, setLawsRepublicUz] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Laws_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setLawsRepublicUz(data));
	}, []);
	return (
		<>
			<h3>{lawsRepublicUz.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${lawsRepublicUz.body}` }} />
			<time>{lawsRepublicUz.date}</time>
		</>
	);
}
