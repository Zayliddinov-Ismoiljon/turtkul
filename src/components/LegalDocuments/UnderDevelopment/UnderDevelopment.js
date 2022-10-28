import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { UnderDevelopmentStyled } from './UnderDevelopment.styles';

export default function UnderDevelopment() {
	const [underDevelopment, setUnderDevelopment] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Discussion_of_NHHs_under_development`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setUnderDevelopment(data));
	}, []);
	return (
		<UnderDevelopmentStyled>
			<h3 className='under-title'>{underDevelopment.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${underDevelopment.body}` }} />
		</UnderDevelopmentStyled>
	);
}
