import React, { useEffect, useState } from 'react'

export default function BusinessDecisions() {
  const [businessDecisions, setBusinessDecisions] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Business_decisions`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setBusinessDecisions(data));
	}, []);
  return (
    <>
			<h3>{businessDecisions.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${businessDecisions.body}` }} />
			<time>{businessDecisions.date}</time>
		</>
  )
}
