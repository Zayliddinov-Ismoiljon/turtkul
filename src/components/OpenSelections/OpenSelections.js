import React, { useEffect, useState } from 'react';

export default function OpenSelections() {
	const [openSelections, setOpenSelections] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Open_Selections_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setOpenSelections(data));
	}, []);
	return (
		<>
			<img src={openSelections.image} alt='image' />
			<h3>{openSelections.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${openSelections.body}` }} />
			<time>{openSelections.date}</time>
		</>
	);
}
