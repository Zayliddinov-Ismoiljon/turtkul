import React, { useEffect, useState } from 'react';

export default function OpenData() {
	const [openData, setOpenData] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Open_Data_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setOpenData(data));
	}, []);
	return (
		<>
			<img src={openData.image} alt='image' />
			<h3>{openData.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${openData.body}` }} />
			<time>{openData.date}</time>
		</>
	);
}
