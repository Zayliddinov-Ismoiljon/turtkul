import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectsIdStyled } from './ProjectsId.styles';

export default function ProjectsId() {
	const [projectsId, setProjectsId] = useState([]);
	const url = useLocation((auth) => auth).pathname;
	const id = url.split('/')[url.split('/').length - 1];

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(
			`${BASE_URL}activity/models_news/Projects_Model/${id}`,
			options,
		)
			.then((response) => response.json())
			.then((data) => {
				setProjectsId(data);
			});
	}, []);
	return (
		<ProjectsIdStyled>
			<div
				id='carouselExampleControls'
				class='carousel slide'
				data-bs-ride='carousel'>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
						<img
						className='carusel-img1'
							style={{ width: '100%', height: '700px' }}
							src={projectsId[0]?.image}
							class='d-block w-100'
							alt='...'
						/>
					</div>
					{projectsId[1]?.map((item, i) => (
						<div key={i} class='carousel-item'>
							<img
								className='carusel-img2'
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
			<h3 className='projectid-title'>{projectsId[0]?.title}</h3>
			<div dangerouslySetInnerHTML={{ __html: `${projectsId[0]?.body}` }} />
		</ProjectsIdStyled>
	);
}
