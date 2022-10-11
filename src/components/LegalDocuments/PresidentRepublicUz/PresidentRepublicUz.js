import React, { useEffect, useState } from 'react';

export default function PresidentRepublicUz() {
	const [presidentRepublicUz, setPresidentRepublicUz] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Resolutions_and_decrees_of_the_President_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPresidentRepublicUz(data));
	}, []);
	return (
		<>
			<h3>{presidentRepublicUz.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${presidentRepublicUz.body}` }} />
			<time>{presidentRepublicUz.date}</time>
		</>
	);
}
