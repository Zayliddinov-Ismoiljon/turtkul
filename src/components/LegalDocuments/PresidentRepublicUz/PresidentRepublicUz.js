import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { PresidentRepublicStyled } from './PresidentRepublic.styles';

export default function PresidentRepublicUz() {
	const [presidentRepublicUz, setPresidentRepublicUz] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Resolutions_and_decrees_of_the_President_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPresidentRepublicUz(data));
	}, []);
	return (
		<PresidentRepublicStyled>
			<h3 className='president-title'>{presidentRepublicUz.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${presidentRepublicUz.body}` }} />
		</PresidentRepublicStyled>
	);
}
