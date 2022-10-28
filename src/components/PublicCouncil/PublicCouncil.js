import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { PublicCouncilStyled } from './PublicConcil.styles';

export default function PublicCouncil() {
	const [publicCouncil, setPublicCouncil] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Public_Council_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPublicCouncil(data));
	}, []);
	return (
		<PublicCouncilStyled>
			<img width={'100%'} style={{borderRadius:'10px'}} src={publicCouncil.image} alt='image' />
			<h3 className='public-title'>{publicCouncil.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${publicCouncil.body}` }} />
		</PublicCouncilStyled>
	);
}
