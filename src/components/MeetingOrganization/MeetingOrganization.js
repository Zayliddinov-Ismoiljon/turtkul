import React, { useEffect, useState } from 'react';

export default function MeetingOrganization() {
	const [meetingOrganization, setMeetingOrganization] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};
		fetch(
			`https://turtkul41.herokuapp.com/meeting/Meeting_Organization`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setMeetingOrganization(data));
	}, []);
	return (
		<>
			<h3>{meetingOrganization.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${meetingOrganization.body}` }} />
			<time>{meetingOrganization.date}</time>
		</>
	);
}
