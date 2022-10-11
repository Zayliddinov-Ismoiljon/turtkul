import React, { useEffect, useState } from 'react'

export default function ResolutionsCabinet() {
  const [resolutionsCabinet, setResolutionsCabinet] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Resolutions_of_the_Cabinet_of_Ministers_of_the_Republic_of_Uzbekistan`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setResolutionsCabinet(data));
	}, []);
  return (
    <>
			<h3>{resolutionsCabinet.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${resolutionsCabinet.body}` }} />
			<time>{resolutionsCabinet.date}</time>
		</>
  )
}
