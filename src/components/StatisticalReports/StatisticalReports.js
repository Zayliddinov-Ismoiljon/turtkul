import React, { useEffect, useState } from 'react'

export default function StatisticalReports() {
  const [statisticalReports, setStatisticalReports] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`https://turtkul41.herokuapp.com/activity/models/Statistical_Reports_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setStatisticalReports(data));
	}, []);
  return (
    <>
			<img src={statisticalReports.image} alt='image' />
			<h3>{statisticalReports.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${statisticalReports.body}` }} />
			<time>{statisticalReports.date}</time>
		</>
  )
}
