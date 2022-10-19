import { BASE_URL } from 'api/config';
import Title from 'components/title';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	fetchEvents,
	getEvents,
} from 'store/reducer-and-action/events/eventsSlice';
import { getActiveLanguageName } from 'store/reducer-and-action/language/language';
import { Wrapper, CardText, CardWrapper } from './events.style';

const Events = () => {
	const dispatch = useDispatch();
	// const data = useSelector((state) => state.events.events);
	const events = useSelector(getEvents);
	const currLanguage = useSelector(getActiveLanguageName);

	useEffect(() => {
		dispatch(fetchEvents(currLanguage));
	}, [currLanguage]);

	const [homeEvents, setHomeEvents] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}/home/uz/events/`, options)
			.then((response) => response.json())
			.then((data) => {
				setHomeEvents(data);
			});
	}, []);

	return (
		<>
				<Title text={'Voqealar'} />
			<Wrapper>
				{homeEvents.map((item, i) => {
					return (
						<CardWrapper key={i}>
							<Link to={`events/${item.id}`}>
              <img src={item.imagesown} alt='event-card-img' />
              </Link>
							<CardText>
								<div
									dangerouslySetInnerHTML={{
										__html: `${item?.title}`,
									}}
								/>
							</CardText>
						</CardWrapper>
					);
				})}
			</Wrapper>
		</>
	);
};

export default Events;
