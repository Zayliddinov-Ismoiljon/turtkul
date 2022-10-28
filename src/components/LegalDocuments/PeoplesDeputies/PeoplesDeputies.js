import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { PeoplesDeputiesStyled } from './PeoplesDeputies.styles';

export default function PeoplesDeputies() {
  const [peoplesDeputies, setPeoplesDeputies] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Resolution_of_the_Turtkul_City_Council_of_Peoples_Deputies`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {setPeoplesDeputies(data)});
	}, []);
  return (
    <PeoplesDeputiesStyled>
			<h3 className='peoples-title'>{peoplesDeputies.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${peoplesDeputies.body}` }} />
			<time>{peoplesDeputies.date}</time>
		</PeoplesDeputiesStyled>
  )
}
