import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { TourismActivitiesStyled } from './TourismActivities.styles';

export default function TourismActivities() {
	const [tourismActivities, setTourismActivities] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Tourism_Activities_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setTourismActivities(data));
	}, []);
	return (
		<TourismActivitiesStyled>
			<img width={'100%'} style={{borderRadius:'10px'}} src={tourismActivities.image} alt='image' />
			<h3 className='tourism-title'>{tourismActivities.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${tourismActivities.body}` }} />
		</TourismActivitiesStyled>
	);
}
