import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { NormativeLegalStyled } from './NormativeLegal.styles';

export default function NormativeLegal() {
  const [normativeLegal, setNormativeLegal] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Normative_legal_acts_of_district_hokimiyats`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setNormativeLegal(data));
	}, []);
  return (
    <NormativeLegalStyled>
			<h3 className='legal-title'>{normativeLegal.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${normativeLegal.body}` }} />
			<time>{normativeLegal.date}</time>
		</NormativeLegalStyled>
  )
}
