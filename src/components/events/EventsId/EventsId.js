import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function EventsId() {
	const [eventsId, setEventsId] = useState([]);
	const url = useLocation((auth) => auth).pathname;
	const id = url.split('/')[url.split('/').length - 1];

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`https://turtkul41.herokuapp.com/home/uz/events/${id}`, options)
			.then((response) => response.json())
			.then((data) => {
        setEventsId(data)
			});
	}, []);
	return (
		<>
			<div
				id='carouselExampleControls'
				class='carousel slide'
				data-bs-ride='carousel'>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img
							style={{ width: '100%', height: '700px' }}
							src={eventsId[0]?.imagesown}
							class='d-block w-100'
							alt='...'
						/>
					</div>
					{eventsId[1]?.map((item, i) => (
						<div key={i} class='carousel-item'>
							<img
								style={{ width: '100%', height: '700px' }}
								src={item}
								alt=''
							/>
						</div>
					))}
				</div>
				<button
					class='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='prev'>
					<span class='carousel-control-prev-icon' aria-hidden='true'></span>
					<span class='visually-hidden'>Previous</span>
				</button>
				<button
					class='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='next'>
					<span class='carousel-control-next-icon' aria-hidden='true'></span>
					<span class='visually-hidden'>Next</span>
				</button>
			</div>
			<h3>{eventsId[0]?.title}</h3>
			<div dangerouslySetInnerHTML={{ __html: `${eventsId[0]?.body}` }} />
		</>
	);
}
