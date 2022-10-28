import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { BusinessStyled } from './BusinessDecsions.styles';

export default function BusinessDecisions() {
  const [businessDecisions, setBusinessDecisions] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Business_decisions`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {setBusinessDecisions(data)});
	}, []);
  return (
    <BusinessStyled>
			<h3 className='business-title'>{businessDecisions.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${businessDecisions.body}` }} />
		</BusinessStyled>
  )
}
