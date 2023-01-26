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

	console.log("open Data==>>", openData);

	return (
		<OpenDataStyled>
			{
				openData.map((item,i)=>(
					<>
						<img className='opendata-img' src={item.image} alt="image" />
						<h5 className='opendata-title'>{item.title}</h5>
						<p dangerouslySetInnerHTML={{ __html: `${item.body}` }} /> 
						<time>{item.date}</time>
						<hr />
					</>
				))
			}
		</OpenDataStyled>
	);
}
