import { Card, Col, Row } from 'antd';
import { BASE_URL } from 'api/config';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsStyled } from './Projects.styles';

export default function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {},
		};

		fetch(`${BASE_URL}activity/models/Projects_Model/`, options)
			.then((response) => response.json())
			.then((data) => {
				setProjects(data);
			});
	}, []);
	return (
		<ProjectsStyled>
			<Row gutter={[12, 12]}>
			{projects.map((item, i) => (
					<Col key={i} xs={24} sm={12} md={8} lg={6} xl={6}>
						<Card className='projects-card'>
							<Link to={`/activity/projects/${item?.id}`}>
                <figure>
									<img width={'100%'} src={item.image} alt='news' />
								</figure>
							</Link>
							<h4 className='projects-title'>{item.title}</h4>
						</Card>
					</Col>
			))}
			</Row>
		</ProjectsStyled>
	);
}
