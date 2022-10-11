import React, { useEffect, useState } from 'react';

export default function PressServices() {
	const [pressServices, setPressServices] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/about_authority/models/Press_Service_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPressServices(data));
	}, []);
  
	return (
		<>
			<img src={pressServices.image} alt='images' />
			<p dangerouslySetInnerHTML={{ __html: `${pressServices.body}` }} />
			<time>{pressServices.date}</time>
		</>
	);
}
