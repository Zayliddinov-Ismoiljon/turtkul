import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { OpenDataStyled } from './OpenData.styles';

export default function OpenData() {
	const [openData, setOpenData] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models/Open_Data_Model/`,
			options,
		)
			.then((response) => response.json())
			.then((data) => setOpenData(data));
	}, []);
	return (
		<OpenDataStyled>
			<img className='opendata-img' src={openData.image} alt='image' />
			<h3 className='opendata-title'>{openData.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: `${openData.body}` }} />
		</OpenDataStyled>
	);
}
