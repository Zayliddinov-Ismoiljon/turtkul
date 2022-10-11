import React, { useEffect, useState } from 'react';

export default function InstitutionsOrganizations() {
	const [institutionsOrganizations, setInstitutionsOrganizations] = useState(
		[],
	);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Procedure_for_allocating_land_plots_for_use_or_lease_to_enterprises_institutions_organizations`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setInstitutionsOrganizations(data));
	}, []);
	return (
		<>
			<h3>{institutionsOrganizations.title}</h3>
			<p
				dangerouslySetInnerHTML={{
					__html: `${institutionsOrganizations.body}`,
				}}
			/>
			<time>{institutionsOrganizations.date}</time>
		</>
	);
}
