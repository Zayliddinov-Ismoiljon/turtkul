import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { AntiCorruptionDocumentsStyled } from './AntiCorruptionDocuments.styles';

export default function AntiCorruptionDocuments() {
	const [corruptionDoc, setCorruptionDoc] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}/anti_corruption/Anticorruption_Documents`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setCorruptionDoc(data);
			});
	},[]);

	return (
		<AntiCorruptionDocumentsStyled>
			{
				<>
					<h2 className='document-title'>{corruptionDoc.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: `${corruptionDoc.body}` }} />
				</>
			}
		</AntiCorruptionDocumentsStyled>
	);
}
