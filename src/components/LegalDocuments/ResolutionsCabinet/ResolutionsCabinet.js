import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react'
import { ResolutionsCabinetStyled } from './ResolutionsCabinet.styles';

export default function ResolutionsCabinet() {
  const [resolutionsCabinet, setResolutionsCabinet] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/Legal_Documents_Model/Resolutions_of_the_Cabinet_of_Ministers_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setResolutionsCabinet(data));
	}, []);
  return (
    <ResolutionsCabinetStyled>
			<h3 className='cabinet-title'>{resolutionsCabinet.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${resolutionsCabinet.body}` }} />
			<time>{resolutionsCabinet.date}</time>
		</ResolutionsCabinetStyled>
  )
}
