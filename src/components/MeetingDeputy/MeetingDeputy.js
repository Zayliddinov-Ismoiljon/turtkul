import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';

export default function MeetingDeputy() {
	const [meetingDeputy, setMeetingDeputy] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}meeting/Meeting_Deputy`, options)
			.then((response) => response.json())
			.then((data) => setMeetingDeputy(data));
	}, []);
	console.log(meetingDeputy);
	return (
		<>
			<h3>{meetingDeputy.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${meetingDeputy.body}` }} />
			<time>{meetingDeputy.date}</time>
		</>
	);
}
