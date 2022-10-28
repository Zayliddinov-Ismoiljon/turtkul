import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RelationDetailStyled } from './RelationDetail.styles';

export default function RelationDetail() {
	const [relationDetail, setRealtionDetail] = useState([]);
	const url = useLocation((auth) => auth).pathname;
	const id = url.split('/')[url.split('/').length - 1];

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models_news/International_Relations_Model/${id}`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setRealtionDetail(data);
			});
	}, []);

	return (
		<RelationDetailStyled>
			<div
				id='carouselExampleControls'
				class='carousel slide'
				data-bs-ride='carousel'>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img
							style={{ width: '100%', borderRadius:'10px' }}
							src={relationDetail[0]?.image}
							class='d-block w-100'
							alt='...'
						/>
					</div>
					{relationDetail[1]?.map((item, i) => (
						<div key={i} class='carousel-item'>
							<img
								style={{ width: '100%', borderRadius:'10px' }}
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
      <h3 className='relation-title'>{relationDetail[0]?.title}</h3>
			<div dangerouslySetInnerHTML={{ __html: `${relationDetail[0]?.body}` }} />
		</RelationDetailStyled>
	);
}
