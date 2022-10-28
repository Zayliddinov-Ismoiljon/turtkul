import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { MayorTurtkulStyled } from './MayorTurtkul.styles';

export default function MayorTurtkul() {
  const [mayotTurtkul, setMayotTurtkul] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Decisions_and_Orders_of_the_Mayor_of_Turtkul`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setMayotTurtkul(data));
	}, []);
  return (
    <MayorTurtkulStyled>
			<h3 className='mayor-title'>{mayotTurtkul.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${mayotTurtkul.body}` }} />
			<time>{mayotTurtkul.date}</time>
		</MayorTurtkulStyled>
  )
}
