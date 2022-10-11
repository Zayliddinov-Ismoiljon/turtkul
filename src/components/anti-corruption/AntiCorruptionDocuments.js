import React, { useEffect, useState } from 'react';

export default function AntiCorruptionDocuments() {
	const [corruptionDoc, setCorruptionDoc] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/anti_corruption/Anticorruption_Documents`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setCorruptionDoc(data);
			});
	},[]);

	return (
		<>
			<h1 style={{ color: 'blue' }}>Sohaga doir normativ-huquqiy hujatlar</h1>
			{
				<>
					<h2>{corruptionDoc.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: `${corruptionDoc.body}` }} />
				</>
			}
		</>
	);
}
