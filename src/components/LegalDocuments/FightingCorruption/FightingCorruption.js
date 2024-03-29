import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { FightingCorruptionStyled } from './FightingCorruption.styles';

export default function FightingCorruption() {
	const [fightingCorruption, setFightingCorruption] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Fighting_corruption`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setFightingCorruption(data));
	}, []);
	return (
		<FightingCorruptionStyled>
			<h3 className='fighting-title'>{fightingCorruption.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${fightingCorruption.body}` }} />
			<time>{fightingCorruption.date}</time>
		</FightingCorruptionStyled>
	);
}
