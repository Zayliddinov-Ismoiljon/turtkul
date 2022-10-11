import React, { useEffect, useState } from 'react'

export default function PeoplesDeputies() {
  const [peoplesDeputies, setPeoplesDeputies] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/Legal_Documents_Model/Resolution_of_the_Turtkul_City_Council_of_Peoples_Deputies`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setPeoplesDeputies(data));
	}, []);
  return (
    <>
			<h3>{peoplesDeputies.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${peoplesDeputies.body}` }} />
			<time>{peoplesDeputies.date}</time>
		</>
  )
}
