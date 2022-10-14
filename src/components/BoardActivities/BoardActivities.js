import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BoardActivities() {
	const [boardActivities, setBoardActivities] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`http://turtkul41.herokuapp.com/meeting/Meeting_News`, options)
			.then((response) => response.json())
			.then((data) => setBoardActivities(data));
	}, []);
	console.log('boardActivitiesDetail==>>', boardActivities);
	return (
		<>
			{boardActivities.map((item, i) => (
				<Card key={i}>
					<Link to={'*'}>
					<img src={item.imagesown} alt='image' />
					</Link>
					<h3>{item.title}</h3>
					<p dangerouslySetInnerHTML={{ __html: `${item.body}` }} />
				</Card>
			))}
		</>
	);
}