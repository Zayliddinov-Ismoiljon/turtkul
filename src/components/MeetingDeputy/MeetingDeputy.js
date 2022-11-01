import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { MeetingDeputyStyled } from './MeetingDeputy.styles';

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
	return (
		<MeetingDeputyStyled>
			<h3 className='meeting-title'>{meetingDeputy.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${meetingDeputy.body}` }} />
		</MeetingDeputyStyled>
	);
}
