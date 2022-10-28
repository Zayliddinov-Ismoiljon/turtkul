import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { MeetingOrganizationStyled } from './MeetingOrganization.styles';

export default function MeetingOrganization() {
	const [meetingOrganization, setMeetingOrganization] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};
		fetch(
			`${BASE_URL}meeting/Meeting_Organization`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setMeetingOrganization(data));
	}, []);
	return (
		<MeetingOrganizationStyled>
			<h3 className='organization-title'>{meetingOrganization.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${meetingOrganization.body}` }} />
		</MeetingOrganizationStyled>
	);
}
