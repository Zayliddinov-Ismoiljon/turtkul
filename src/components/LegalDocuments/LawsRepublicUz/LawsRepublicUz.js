import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { LawsRepublicUzStyled } from './LawsRepublicUz.styles';

export default function LawsRepublicUz() {
	const [lawsRepublicUz, setLawsRepublicUz] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Laws_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setLawsRepublicUz(data));
	}, []);
	return (
		<LawsRepublicUzStyled>
			<h3 className='laws-title'>{lawsRepublicUz.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${lawsRepublicUz.body}` }} />
		</LawsRepublicUzStyled>
	);
}
