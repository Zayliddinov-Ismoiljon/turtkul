import React, { useEffect, useState } from 'react';

export default function ManagementStatement() {
	const [managementStatement, setManagementStatement] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/about_authority/models/Management_Statements_Model`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setManagementStatement(data));
	}, []);

	return (
		<>
			<img src={managementStatement.image} alt='image' />
			<h3>{managementStatement.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${managementStatement.body}` }} />
		</>
	);
}
