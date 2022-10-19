import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';

export default function PressServices() {
	const [pressServices, setPressServices] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}about_authority/models/Press_Service_Model`,
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
