import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BoardActivitiesIdStyled } from './BoardActivitiesId.styles';

export default function BoardActivitiesId() {
	const [boardActivitiesId, setBoardActivitiesId] = useState([]);
	const url = useLocation((auth) => auth).pathname;
	const id = url.split('/')[url.split('/').length - 1];

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}meeting/Meeting_News_Id/${id}`, options)
			.then((response) => response.json())
			.then((data) => {
				setBoardActivitiesId(data);
				// console.log('dataaaxxxxXXXx', data);
			});
	}, []);
	return (
		<BoardActivitiesIdStyled>
			<h3 className='board-title'>{boardActivitiesId[0]?.title}</h3>
			<div
				id='carouselExampleControls'
				class='carousel slide'
				data-bs-ride='carousel'>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img
							className='carusel-img1'
							style={{ width: '100%'}}
							src={boardActivitiesId[0]?.imagesown}
							class='d-block w-100'
							alt='image'
						/>
					</div>
					{boardActivitiesId[1]?.map((item, i) => (
						<div key={i} class='carousel-item'>
							<img width={'100%'} className='carusel-img2' src={item} alt='image' />
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
			<p
			style={{marginTop:'15px'}}
				dangerouslySetInnerHTML={{ __html: `${boardActivitiesId[0]?.body}` }}
			/>
		</BoardActivitiesIdStyled>
	);
}
