import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { OpenMeetingStyled } from './OpenMeeting.styles';

export default function OpenMeeting() {
  const [openSelections, setOpenSelections] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Open_Selections_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setOpenSelections(data));
	}, []);
  return (
    <OpenMeetingStyled>
			<img className='meeting-img' src={openSelections.image} alt='image' />
			<h3  className='meeting-title'>{openSelections.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${openSelections.body}` }} />
		</OpenMeetingStyled>
  )
}
